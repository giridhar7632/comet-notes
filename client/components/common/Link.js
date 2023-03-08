import { Link as ChakraLink } from '@chakra-ui/next-js'

export default function Link() {
	return (
		<ChakraLink
			href='/about'
			color='purple.400'
			_hover={{ color: 'purple.500' }}>
			{text}
		</ChakraLink>
	)
}
