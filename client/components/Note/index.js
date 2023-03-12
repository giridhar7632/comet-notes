import { useNote } from '@/context/useNote'
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { format } from 'timeago.js'
import { Trash } from '../icons'
import Edit from './Edit'

const View = ({ note, children, ...props }) => {
	const { deleteNote } = useNote()
	const { isOpen, onOpen, onClose } = useDisclosure()
	function OnInput(e) {
		e.target.style.height = 0
		e.target.style.height = e.target.scrollHeight + 'px'
	}

	return (
		<>
			<Box onClick={onOpen} {...props}>
				{children}
			</Box>

			<Modal
				onClose={onClose}
				isOpen={isOpen}
				size={'xl'}
				scrollBehavior={'inside'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<ModalCloseButton />
					</ModalHeader>
					<ModalBody minHeight={300}>
						<Heading as={'h2'} mb={2} borderBottom={1}>
							{note.title}
						</Heading>

						<Text> {note.content}</Text>
					</ModalBody>
					<ModalFooter
						display={'flex'}
						alignItems={'end'}
						justifyContent='space-between'>
						<Flex gap={4} alignItems={'center'}>
							<Edit {...note} />
							<IconButton
								onClick={() => {
									deleteNote(note._id)
									onClose()
								}}
								colorScheme='red'
								variant='outline'
								size='sm'
								icon={<Trash width={18} />}
							/>
						</Flex>

						<Text fontSize={'sm'} textAlign={'right'} color={'gray.400'}>
							Last updated {format(note.updatedAt)}
						</Text>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default View
