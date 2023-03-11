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
	Flex,
	useColorModeValue,
} from '@chakra-ui/react'
import { useAuth } from '@/utils/useAuth'
import { useRouter } from 'next/router'
import { fetcher } from '@/utils/fetcher'

const CreateNote = () => {
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

	const handleChange = (e) => {
		const { name, value } = e.target
		setNote({ ...note, [name]: value })
	}

	const createNote = async (e) => {
		console.log('create')
		e.preventDefault()
		try {
			if (isAuth) {
				const { title, content } = note
				const newNote = { title, content }

				const res = await fetcher('/notes', {
					body: newNote,
					token: isAuth,
				})
				console.log(res)
				addToast(res.data.message, res.data.type)
				return router.push('/')
			}
		} catch (error) {
			window.location.href = '/'
		}
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
				onSubmit={createNote}>
				<Heading as={'h1'} size='lg' mb={6}>
					Create Note
				</Heading>
				<FormControl>
					<FormLabel>Title</FormLabel>
					<Input
						name='title'
						value={note.title}
						focusBorderColor='purple.400'
						onChange={handleChange}
						placeholder='Untitled'
					/>
				</FormControl>

				<FormControl mt={4} isRequired>
					<FormLabel>Content</FormLabel>
					<Textarea
						name='content'
						value={note.content}
						focusBorderColor='purple.400'
						onChange={handleChange}
						placeholder='Content of the note'
					/>
				</FormControl>
				<Button type='submit' colorScheme='purple' mt={3}>
					Add Note
				</Button>
			</Box>
		</Flex>
	)
}

export default CreateNote
