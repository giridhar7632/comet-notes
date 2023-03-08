import { extendTheme } from '@chakra-ui/react'

// example theme
const theme = extendTheme({
	fonts: {
		body: ['Hind', 'system-ui, sans-serif'],
		heading: ['Montserrat', 'system-ui, sans-serif'],
		mono: 'Menlo, monospace',
	},
})

export default theme
