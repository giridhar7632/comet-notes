import Loader from '@/components/common/Loader'
import { Trash } from '@/components/icons'
import {
	Card,
	Flex,
	Grid,
	Heading,
	HStack,
	IconButton,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { format } from 'timeago.js'
import { useNote } from '@/context/useNote'
import Edit from '@/components/Note/Edit'
import View from '@/components/Note'

export default function Home() {
	const { notes, deleteNote, loading } = useNote()
	const bgColor = useColorModeValue('white', 'gray.800')
	const borderColor = useColorModeValue('gray.200', 'gray.700')

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
						'repeat(2, 1fr)',
						'repeat(3, 1fr)',
					]}
					gap={[4, 6]}
					mx={'auto'}
					maxWidth={['100%']}>
					{notes.map((note) => (
						<Card
							display={'flex'}
							direction={'column'}
							p={5}
							key={note._id}
							cursor={'pointer'}
							shadow='sm'
							w={'100%'}
							bg={bgColor}
							borderColor={borderColor}
							borderWidth='1px'
							borderRadius='md'
							_hover={{ shadow: 'md' }}>
							<View note={note} flex='1'>
								<Heading size='md' isTruncated>
									{note.title}
								</Heading>
								<Text my={4} noOfLines={[3, 4, 5]}>
									{note.content}
								</Text>
							</View>

							<HStack alignItems={'end'} justifyContent='space-between'>
								<Flex gap={4} alignItems={'center'}>
									<Edit {...note} />
									<IconButton
										onClick={() => deleteNote(note._id)}
										colorScheme='red'
										variant='outline'
										size='sm'
										icon={<Trash width={18} />}
									/>
								</Flex>

								<Text
									fontSize={'x-small'}
									textAlign={'right'}
									color={'gray.400'}>
									Last updated {format(note.updatedAt)}
								</Text>
							</HStack>
						</Card>
					))}
				</Grid>
			)}
		</Flex>
	)
}
