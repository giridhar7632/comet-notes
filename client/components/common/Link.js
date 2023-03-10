import NextLink from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Link = ({ href, children, ...props }) => {
	const color = useColorModeValue('purple.500', 'purple.300')
	return (
		<Text
			as={NextLink}
			href={href}
			{...props}
			color={color}
			_hover={{ textDecoration: 'underline' }}>
			{children}
		</Text>
	)
}

export default Link
