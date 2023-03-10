import Head from 'next/head'

const makeTitle = (title, name) =>
	title === name || !name ? title : `${title} | ${name}`

export const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://comet-notes.vercel.app'

const Meta = ({
	title = 'Comet Notes',
	name = 'Take Quick and Fast Notes',
	description = 'An app to take and share quick, fast notes',
	url = baseUrl,
	image = '/og.png',
	children,
}) => (
	<Head>
		<title>{makeTitle(title, name)}</title>
		<meta property='og:title' content={makeTitle(title, name)} key='og:title' />
		<meta property='og:image' content={url + image} key='og:image' />
		<meta property='description' content={description} key='description' />
		<meta
			property='og:description'
			content={description}
			key='og:description'
		/>
		<meta property='og:type' content='website' />
		<meta property='og:url' content={url} />
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:title' content={title} key='twitter:title' />
		<meta
			property='twitter:description'
			content={description}
			key='twitter:description'
		/>
		<meta property='twitter:image' content={url + image} key='twitter:image' />
		<meta name='theme-color' content='#ffffff' />
		<meta
			name='theme-color'
			content='#f1f5f8'
			media='(prefers-color-scheme: dark)'
		/>
		<meta
			name='theme-color'
			content='#172126'
			media='(prefers-color-scheme: light)'
		/>

		<link rel='manifest' href='/site.webmanifest' />
		<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
		<meta name='msapplication-TileColor' content='#ffc40d' />
		<link rel='apple-touch-icon' sizes='192x192' href='/icon-192x192.png' />
		<link rel='icon' type='image/png' sizes='32x32' href='/icon-256x256.png' />
		<link rel='icon' href='/favicon.ico' />
		{children}
	</Head>
)

export default Meta
