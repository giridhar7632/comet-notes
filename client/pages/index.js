import Link from '@/components/common/Link'
import { Pencil, Trash } from '@/components/icons'
import Layout from '@/components/layout'
import { fetcher } from '@/utils/fetcher'
import { useAuth } from '@/utils/useAuth'
import {
	Box,
	Flex,
	Grid,
	Heading,
	HStack,
	IconButton,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Home() {
	const [notes, setNotes] = useState([])
	const { isAuth } = useAuth()

	const getNotes = async (token) => {
		const res = await fetcher('api/notes', {
			headers: { Authorization: token },
		})
		setNotes(res.data)
	}

	useEffect(() => {
		if (isAuth) {
			getNotes(isAuth)
		}
	}, [isAuth])

	const deleteNote = async (id) => {
		try {
			if (isAuth) {
				await fetcher(`api/notes/${id}`, {
					method: 'DELETE',
					headers: { Authorization: isAuth },
				})
				getNotes(isAuth)
			}
		} catch (error) {
			window.location.href = '/'
		}
	}
	return (
		<Flex w='100%' flexDirection='column' mb={8}>
			{!notes.length ? (
				<Flex
					h={['30vh', '50vh']}
					w='100%'
					justifyContent='center'
					alignItems='center'>
					<Text fontSize={['2xl', '3xl']} opacity='0.2'>
						No Notes Added
					</Text>
				</Flex>
			) : (
				<Grid
					templateColumns={[
						'repeat(1, 1fr)',
						'repeat(2, 1fr)',
						'repeat(3, 1fr)',
					]}
					gap={6}
					m='0 auto'
					w={['100%', '90%', '85%']}>
					{notes.map((note) => (
						<Box
							w='100%'
							p={5}
							shadow='md'
							borderWidth='1px'
							flex='1'
							borderRadius='md'
							key={note._id}>
							<Heading size='md' isTruncated>
								{note.title}
							</Heading>
							<Text my={4} noOfLines={[3, 4, 5]}>
								{note.content}
							</Text>
							<Stack spacing={4}>
								<HStack justifyContent='space-between'>
									<Text color='purple.500'>{note.name}</Text>
									<Text>{format(note.date)}</Text>
								</HStack>
								<HStack justifyContent='space-between'>
									<Link href={`/edit/${note._id}`}>
										<IconButton
											colorScheme='purple'
											variant='solid'
											size='md'
											icon={<Pencil />}
										/>
									</Link>
									<IconButton
										onClick={() => deleteNote(note._id)}
										colorScheme='red'
										variant='outline'
										size='md'
										icon={<Trash />}
									/>
								</HStack>
							</Stack>
						</Box>
					))}
				</Grid>
			)}
		</Flex>
	)
}
