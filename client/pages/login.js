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

const Login = () => {
	const [user, setUser] = useState({ name: '', email: '', password: '' })
	const [show, setShow] = useState(false)
	const { isAuth, login, isLoading } = useAuth()
	const router = useRouter()
	const borderColor = useColorModeValue('gray.200', 'gray.600')
	const bgColor = useColorModeValue('whiteAlpha.700', 'gray.800')

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

	const loginUser = async (e) => {
		e.preventDefault()
		await login(user)
		setUser({ name: '', email: '', password: '' })
	}

	return (
		<Flex flexDirection='column' alignItems={'center'} justifyContent='center'>
			<Box
				shadow={'sm'}
				as={'form'}
				p={12}
				w={'100%'}
				maxW={96}
				rounded={'xl'}
				backdropBlur={'12px'}
				borderWidth={'1px'}
				borderColor={borderColor}
				bg={bgColor}
				onSubmit={loginUser}>
				<Heading as='h1' size='lg' mb={6}>
					Login
				</Heading>
				<FormControl id='email' isRequired>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						name='email'
						value={user.email}
						focusBorderColor='purple.400'
						onChange={handleChange}
						placeholder='your@email.com'
					/>
				</FormControl>
				<FormControl id='password' mt='2' isRequired>
					<FormLabel>Password</FormLabel>
					<InputGroup size='md'>
						<Input
							pr='4.5rem'
							type={show ? 'text' : 'password'}
							name='password'
							value={user.password}
							focusBorderColor='purple.400'
							onChange={handleChange}
							placeholder='your super secret'
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
					isLoading={isLoading}
					loadingText='Logging in...'
					colorScheme='purple'
					variant='solid'>
					Login
				</Button>
			</Box>
			<Text display={'flex'} gap={1} mt={6}>
				{"Don't have an account? "}
				<Link href={'/register'}>Register now</Link>
			</Text>
		</Flex>
	)
}

export default Login
