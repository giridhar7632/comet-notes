import Image from 'next/image'
import Link from 'next/link'
import { Flex, Button, Heading } from '@chakra-ui/react'
import { ColorModeSwitcher } from '@/utils/ColorModeSwitcher'
import { useAuth } from '@/utils/useAuth'

const Navbar = () => {
	const { isAuth, logout } = useAuth()

	return (
		<Flex as={'nav'} justifyContent='space-between' w='100%' my={2} p={4}>
			<Flex gap={4} justifyContent='center' alignItems='center'>
				<Image src={'/logo.png'} alt='' width={36} height={36} />
				<Heading textAlign='center' fontWeight='bold' fontSize='2xl'>
					<Link href='/'>Comet Notes</Link>
				</Heading>
			</Flex>
			<Flex gap={3} justifyContent='space-between'>
				{isAuth && (
					<Link href='/create'>
						<Button colorScheme={'purple'} size='md'>
							Add Note
						</Button>
					</Link>
				)}
				{isAuth && (
					<Button variant='text' size='md' onClick={logout}>
						Logout
					</Button>
				)}
				<ColorModeSwitcher />
			</Flex>
		</Flex>
	)
}

export default Navbar
