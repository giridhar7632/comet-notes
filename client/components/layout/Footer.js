import { Flex, Text } from '@chakra-ui/react'
import Link from '../common/Link'

const Footer = () => (
	<Flex
		as={'footer'}
		justifyContent='space-between'
		alignItems={'center'}
		w='100%'
		flexDirection={['column-reverse', 'row']}
		fontSize={'sm'}
		my={2}
		p={4}>
		<Text color={'gray.500'}>
			&copy; {new Date().getFullYear()}
			{' Comet Notes | All Rights Reserved'}
		</Text>

		<Link
			href={'https://github.com/giridhar7632/comet-notes'}
			target={'_blank'}>
			Source code
		</Link>
	</Flex>
)

export default Footer
