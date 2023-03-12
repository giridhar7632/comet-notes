import { useNote } from '@/context/useNote'
import {
	Button,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	useDisclosure,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { Pencil } from '../icons'

const Edit = ({ title = '', content = '', _id }) => {
	const [note, setNote] = useState({ title, content, id: _id })
	const [loading, setLoading] = useState(false)

	const { editNote } = useNote()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const initialRef = useRef(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setNote({ ...note, [name]: value })
	}
	const handleEditNote = async (e) => {
		e.preventDefault()
		setLoading(true)
		await editNote(note)
		setLoading(false)
		onClose()
	}

	// function OnInput(e) {
	// 	e.target.style.height = 0
	// 	e.target.style.height = e.target.scrollHeight + 'px'
	// }

	return (
		<>
			<IconButton
				colorScheme='purple'
				variant='solid'
				size='sm'
				onClick={onOpen}
				icon={<Pencil width={18} />}
			/>

			<Modal
				onClose={onClose}
				isOpen={isOpen}
				size={'xl'}
				initialFocusRef={initialRef}
				scrollBehavior={'inside'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Note</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								name='title'
								value={note.title}
								focusBorderColor='purple.400'
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl mt={4} isRequired>
							<FormLabel>Content</FormLabel>
							<Textarea
								name='content'
								value={note.content}
								ref={initialRef}
								focusBorderColor='purple.400'
								minHeight={'200px'}
								resize={'vertical'}
								onChange={handleChange}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter gap={4}>
						<Button
							onClick={handleEditNote}
							colorScheme={'purple'}
							isLoading={loading}
							loadingText={'Saving...'}>
							Save
						</Button>
						<Button variant={'outline'} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default Edit
