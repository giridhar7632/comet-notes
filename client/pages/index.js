import Link from '@/components/common/Link'
import Loader from '@/components/common/Loader'
import { Pencil, Trash } from '@/components/icons'
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
	useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { format } from 'timeago.js'

export default function Home() {
	const [notes, setNotes] = useState([])
	const [loading, setLoading] = useState(true)
	const { isAuth } = useAuth()
	const bgColor = useColorModeValue('white', 'gray.900')

	const getNotes = async (token) => {
		const res = await fetcher('/notes', { token })
		console.log({ res })
		setNotes(res.data)
	}

	useEffect(() => {
		if (isAuth) {
			getNotes(isAuth).then(() => setLoading(false))
		}
	}, [isAuth])

	const deleteNote = async (id) => {
		try {
			if (isAuth) {
				await fetcher(`/notes/${id}`, {
					method: 'DELETE',
					token: isAuth,
				})
				getNotes(isAuth)
			}
		} catch (error) {
			window.location.href = '/'
		}
	}
	return (
		<Flex w='100%' flexDirection='column' mb={8}>
			{loading ? (
				<Loader />
			) : !notes.length ? (
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
							cursor={'pointer'}
							shadow='sm'
							bg={bgColor}
							borderWidth='1px'
							flex='1'
							borderRadius='md'
							_hover={{ shadow: 'md' }}
							key={note._id}>
							<Heading size='md' isTruncated>
								{note.title}
							</Heading>
							<Text my={4} noOfLines={[3, 4, 5]}>
								{note.content}
							</Text>
							<Stack spacing={4}>
								{/* <HStack alignItems={'end'} justifyContent='space-between'> */}
								{/* <Text fontSize={'sm'} color='purple.500'>
										{note.name}
									</Text> */}
								<Text
									fontSize={'x-small'}
									textAlign={'right'}
									color={'gray.400'}>
									Last updated {format(note.updatedAt)}
								</Text>
								{/* </HStack> */}
								<HStack justifyContent='space-between'>
									<Link href={`/note/${note._id}`}>
										<IconButton
											colorScheme='purple'
											variant='solid'
											size='sm'
											icon={<Pencil width={18} />}
										/>
									</Link>
									<IconButton
										onClick={() => deleteNote(note._id)}
										colorScheme='red'
										variant='outline'
										size='sm'
										icon={<Trash width={18} />}
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
