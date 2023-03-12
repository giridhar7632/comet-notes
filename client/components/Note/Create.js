import { useNote } from '@/context/useNote'
import {
	Button,
	FormControl,
	FormLabel,
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

const Create = () => {
	const [note, setNote] = useState({ title: '', content: '' })
	const [loading, setLoading] = useState(false)

	const { createNote } = useNote()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const initialRef = useRef(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setNote({ ...note, [name]: value })
	}
	const handleCreateNote = async (e) => {
		e.preventDefault()
		setLoading(true)
		await createNote(note)
		setLoading(false)
		setNote({ title: '', content: '' })
		onClose()
	}

	// function OnInput(e) {
	// 	e.target.style.height = 0
	// 	e.target.style.height = e.target.scrollHeight + 'px'
	// }

	return (
		<>
			<Button colorScheme={'purple'} size='md' onClick={onOpen}>
				Add Note
			</Button>

			<Modal
				onClose={onClose}
				isOpen={isOpen}
				size={'xl'}
				initialFocusRef={initialRef}
				scrollBehavior={'inside'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Note</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								name='title'
								value={note.title}
								ref={initialRef}
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
								resize={'vertical'}
								onChange={handleChange}
								placeholder='Content of the note'
								minHeight={'200px'}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter gap={4}>
						<Button
							onClick={handleCreateNote}
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

export default Create
