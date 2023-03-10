const { Center, Spinner } = require('@chakra-ui/react')

const Loader = () => {
	return (
		<Center p={12} h={'full'} w={'full'}>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='purple.500'
				size='xl'
			/>
		</Center>
	)
}

export default Loader
