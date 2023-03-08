import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from './theme'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Montserrat:wght@700;900&display=swap'
					rel='stylesheet'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				{/* 👇 Here's the script */}
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
