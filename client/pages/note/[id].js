import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@chakra-ui/button'
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Heading,
	Box,
	useToast,
	Flex,
	useColorModeValue,
} from '@chakra-ui/react'
import { useAuth } from '@/utils/useAuth'
import { useRouter } from 'next/router'
import { fetcher } from '@/utils/fetcher'

const EditNote = () => {
	const [note, setNote] = useState({
		title: '',
		content: '',
	})

	const { isAuth } = useAuth()
	const router = useRouter()
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const bgColor = useColorModeValue('whiteAlpha.700', 'gray.800')
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
	console.log(router.pathname)
	useEffect(() => {
		const getNote = async () => {
			if (router.query.id) {
				const res = await fetcher(`/notes/${router.query.id}`, {
					token: isAuth,
				})
				setNote({
					title: res.title,
					content: res.content,
					id: res._id,
				})
			}
		}
		getNote()
	}, [isAuth, router.query.id])

	const editNote = async (e) => {
		e.preventDefault()
		try {
			if (isAuth) {
				const { title, content, id } = note
				const newNote = { title, content }

				const res = await fetcher(`/notes/${id}`, {
					method: 'PUT',
					body: newNote,
					token: isAuth,
				})
				addToast(res.message, res.type)
				router.push('/')
			}
		} catch (error) {
			window.location.href = '/'
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setNote({ ...note, [name]: value })
	}

	return (
		<Flex flexDirection='column' alignItems={'center'} justifyContent='center'>
			<Box
				shadow={'sm'}
				as={'form'}
				p={12}
				w={'100%'}
				maxW={'500px'}
				rounded={'xl'}
				backdropBlur={'12px'}
				borderWidth={'1px'}
				borderColor={borderColor}
				bg={bgColor}
				onSubmit={editNote}>
				<Heading as={'h1'} size='lg' mb={6}>
					Edit Note
				</Heading>
				<FormControl>
					<FormLabel>Title</FormLabel>
					<Input
						name='title'
						value={note.title}
						focusBorderColor='purple.400'
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Content</FormLabel>
					<Textarea
						focusBorderColor='purple.400'
						name='content'
						value={note.content}
						onChange={handleChange}
					/>
				</FormControl>
				<Button type='submit' colorScheme='purple' mt={3}>
					Save
				</Button>
			</Box>
		</Flex>
	)
}

export default EditNote
