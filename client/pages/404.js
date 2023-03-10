import Link from 'next/link'
import { Button, Heading, Text, VStack } from '@chakra-ui/react'

const NotFound = () => {
	return (
		<VStack>
			<Heading as='h1' fontSize={'8xl'} fontWeight={'black'}>
				404
			</Heading>
			<Text my={4} fontSize={'xl'} fontWeight={'medium'}>
				Page not found!
			</Text>
			<Link href={'/'} replace>
				<Button colorScheme={'purple'}>Go to Home</Button>
			</Link>
		</VStack>
	)
}

export default NotFound
