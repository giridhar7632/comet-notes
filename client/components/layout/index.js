import { Box, Flex } from '@chakra-ui/react'
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ meta, children, ...props }) => {
	return (
		<Box
			width={'100vw'}
			height={'100%'}
			bgImage="url('/bg.png')"
			bgPosition='center'>
			<Meta {...meta} />
			<Flex
				w={'100%'}
				mx={'auto'}
				maxW={'5xl'}
				minHeight={'100vh'}
				direction={'column'}>
				<Navbar />
				<Box h={'100%'} flex='1' px={4} py={2} {...props}>
					{children}
				</Box>
				<Footer />
			</Flex>
		</Box>
	)
}

export default Layout
