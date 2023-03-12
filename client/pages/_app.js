import Layout from '@/components/layout'
import Protected from '@/components/Protected'
import { titleCase } from '@/utils/titleCase'
import { AuthProvider } from '@/context/useAuth'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NoteProvider } from '@/context/useNote'

function MyApp({ Component, pageProps }) {
	const protectedRoutes = ['/']
	const router = useRouter()
	const name = titleCase(router.pathname.slice(1))
	return (
		<ChakraProvider>
			<AuthProvider>
				<NoteProvider>
					<Layout meta={name && { name }}>
						<Protected protectedRoutes={protectedRoutes}>
							<Component {...pageProps} />
						</Protected>
					</Layout>
				</NoteProvider>
			</AuthProvider>
		</ChakraProvider>
	)
}

export default MyApp
