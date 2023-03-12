import { useToast } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { fetcher } from '../utils/fetcher'
import { useAuth } from './useAuth'

// making custom hook to use context in each component
export const useNote = () => useContext(NoteContext)

// creating context
export const NoteContext = createContext({})

// defining the Context provider
export const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([])
	const [loading, setLoading] = useState(true)
	const { isAuth } = useAuth()
	const toast = useToast()
	const toastIdRef = useRef()
	const addToast = (text, type) => {
		toastIdRef.current = toast({
			title: `${text}`,
			status: `${type}`,
			isClosable: true,
			duration: 3000,
		})
	}

	useEffect(() => {
		if (isAuth) {
			getNotes().then(() => setLoading(false))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	async function getNotes() {
		try {
			const res = await fetcher('/notes', { token: isAuth })
			setNotes(res.data)
			// addToast(res.message, res.type)
		} catch (error) {
			console.log(error)
			error?.message
				? addToast(error.message, 'error')
				: addToast('Something went wrong! 😕', 'error')
		}
	}

	async function getNote(id) {
		if (id) {
			const res = await fetcher(`/notes/${id}`, {
				token: isAuth,
			})
			return {
				title: res.title,
				content: res.content,
				id: res._id,
			}
		}
	}

	async function createNote(note) {
		try {
			if (isAuth) {
				const { title, content } = note
				const newNote = { title, content }

				setNotes((prev) => [
					...prev,
					{ id: 'newNote', title, content, updatedAt: new Date() },
				])
				const res = await fetcher('/notes', {
					body: newNote,
					token: isAuth,
				})
				addToast(res.message, res.type)
				getNotes()
			}
		} catch (error) {
			error?.message
				? addToast(error.message, 'error')
				: addToast('Something went wrong! 😕', 'error')
		}
	}

	async function editNote(note) {
		try {
			if (isAuth) {
				const { title, content, id } = note
				const newNote = { title, content }

				setNotes((prev) =>
					prev.map((i) => (i._id === id ? { ...i, ...newNote } : i))
				)
				const res = await fetcher(`/notes/${id}`, {
					method: 'PUT',
					body: newNote,
					token: isAuth,
				})
				addToast(res.message, res.type)
				getNotes()
			}
		} catch (error) {
			error?.message
				? addToast(error.message, 'error')
				: addToast('Something went wrong! 😕', 'error')
		}
	}

	const deleteNote = async (id) => {
		try {
			if (isAuth) {
				setNotes((prev) => prev.filter((i) => i._id !== id))
				await fetcher(`/notes/${id}`, {
					method: 'DELETE',
					token: isAuth,
				})
				getNotes()
			}
		} catch (error) {
			error?.message
				? addToast(error.message, 'error')
				: addToast('Something went wrong! 😕', 'error')
		}
	}

	return (
		<NoteContext.Provider
			value={{
				notes,
				loading,
				getNotes,
				getNote,
				createNote,
				editNote,
				deleteNote,
			}}>
			{children}
		</NoteContext.Provider>
	)
}
