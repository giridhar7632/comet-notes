import React, { useRef, useState } from 'react'
import { Button } from '@chakra-ui/button'
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Heading,
	Box,
	useToast,
} from '@chakra-ui/react'
import { useAuth } from '@/utils/useAuth'
import { useRouter } from 'next/router'
import { fetcher } from '@/utils/fetcher'

const CreateNote = () => {
	const [note, setNote] = useState({
		title: '',
		content: '',
		date: '',
	})
	const { isAuth } = useAuth()
	const router = useRouter()
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

	const handleChange = (e) => {
		const { name, value } = e.target
		setNote({ ...note, [name]: value })
	}

	const createNote = async (e) => {
		console.log('create')
		e.preventDefault()
		try {
			if (isAuth) {
				const { title, content, date } = note
				const newNote = { title, content, date }

				const res = await fetcher('/api/notes', {
					body: newNote,
					headers: { Authorization: isAuth },
				})
				console.log(res)
				addToast(res.data.msg, res.data.type)
				return router.push('/')
			}
		} catch (error) {
			window.location.href = '/'
		}
	}

	return (
		<div>
			<Box w='30vw'>
				<Heading my={4}> Create Note</Heading>
				<form onSubmit={createNote}>
					<FormControl>
						<FormLabel>Title</FormLabel>
						<Input
							name='title'
							value={note.title}
							onChange={handleChange}
							placeholder='Untitled'
						/>
					</FormControl>

					<FormControl mt={4} isRequired>
						<FormLabel>Content</FormLabel>
						<Textarea
							name='content'
							value={note.content}
							onChange={handleChange}
							placeholder='Content of the note'
						/>
					</FormControl>

					<FormControl mt={4}>
						<FormLabel>Date</FormLabel>
						<Input
							name='date'
							value={note.date}
							onChange={handleChange}
							type='date'
						/>
					</FormControl>
					<Button type='submit' colorScheme='purple' mt={3}>
						Add Note
					</Button>
				</form>
			</Box>
		</div>
	)
}

export default CreateNote
