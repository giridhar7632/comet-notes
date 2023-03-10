import Layout from '@/components/layout'
import Protected from '@/components/Protected'
import { AuthProvider } from '@/utils/useAuth'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const protectedRoutes = ['/', '/note/create', '/note/edit']
	const router = useRouter()
	const name = router.pathname.slice(1).replace('/', ' ')
	return (
		<ChakraProvider>
			<AuthProvider>
				<Layout meta={name && { name }}>
					<Protected protectedRoutes={protectedRoutes}>
						<Component {...pageProps} />
					</Protected>
				</Layout>
			</AuthProvider>
		</ChakraProvider>
	)
}

export default MyApp
