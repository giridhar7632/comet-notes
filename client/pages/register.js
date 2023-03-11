import { useEffect, useState } from 'react'
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import Link from '@/components/common/Link'
import { useAuth } from '@/utils/useAuth'
import { useRouter } from 'next/router'

const Register = () => {
	const [user, setUser] = useState({ name: '', email: '', password: '' })
	const { isAuth, register, isLoading } = useAuth()
	const router = useRouter()
	const [show, setShow] = useState(false)
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const bgColor = useColorModeValue('whiteAlpha.700', 'gray.800')
	// const toast = useToast()
	// const toastIdRef = useRef()
	// const addToast = (text, type) => {
	// 	toastIdRef.current = toast({
	// 		title: `${text}`,
	// 		status: `${type}`,
	// 		isClosable: true,
	// 		duration: 3000,
	// 	})
	// }

	useEffect(() => {
		if (isAuth) {
			router.replace('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	const handleChange = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}
	const handlePassword = () => setShow(!show)

	const registerUser = async (e) => {
		e.preventDefault()
		await register(user)
		setUser({ name: '', email: '', password: '' })
		router.replace('/login')
	}

	return (
		<Flex flexDirection='column' alignItems={'center'} justifyContent='center'>
			<Box
				shadow={'sm'}
				as={'form'}
				p={12}
				w={'500px'}
				maxW={'3xl'}
				rounded={'xl'}
				backdropBlur={'12px'}
				borderWidth={'1px'}
				borderColor={borderColor}
				bg={bgColor}
				onSubmit={registerUser}>
				<Heading as='h2' size='lg' mb={6}>
					Register
				</Heading>
				<FormControl id='name' isRequired mb={2}>
					<FormLabel>Username</FormLabel>
					<Input
						type='text'
						name='name'
						autoComplete='username'
						value={user.name}
						onChange={handleChange}
						placeholder='your sweet name'
					/>
				</FormControl>
				<FormControl id='email' isRequired mb={2}>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						name='email'
						autoComplete='email'
						value={user.email}
						onChange={handleChange}
						placeholder='your@email.com'
					/>
				</FormControl>
				<FormControl id='password' isRequired mb={2}>
					<FormLabel>Password</FormLabel>
					<InputGroup size='md'>
						<Input
							pr='4.5rem'
							type={show ? 'text' : 'password'}
							name='password'
							value={user.password}
							onChange={handleChange}
							placeholder='super secret - min 8 characters'
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handlePassword}>
								{show ? 'Hide' : 'Show'}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Button
					mt={6}
					type='submit'
					disabled={isLoading}
					colorScheme='purple'
					variant='solid'>
					Register
				</Button>
			</Box>
			<Text display={'flex'} gap={1} mt={6}>
				{'Already have an account? '}
				<Link href={'/login'}>Login</Link>
			</Text>
		</Flex>
	)
}

export default Register
