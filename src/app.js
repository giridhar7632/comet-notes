const cors = require('cors')
const express = require('express')
const { connect } = require('mongoose')
const cookieParser = require('cookie-parser')

// Routes
const authRouter = require('./routes/auth.js')
const notesRouter = require('./routes/notes.js')
const mainRouter = require('./routes/index.js')
const { MONGO_URI } = require('./utils/config.js')
const logger = require('./utils/logger')
const { requestLogger } = require('./utils/middleware.js')

const app = express()

// middleware functions
app.use((req, res, next) => {
	const allowedOrigins = [
		'http://127.0.0.1:3000',
		'http://localhost:3000',
		'http://localhost:5000',
		'http://127.0.0.1:5000',
		'http://localhost:8080',
		'https://comet-notes.vercel.app',
	]
	const origin = req.headers.origin
	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin)
	}
	// res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	)
	res.setHeader('Access-Control-Allow-Credentials', true)
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(requestLogger)
// app.use(
// 	cors({
// 		origin: 'https://comet-notes.vercel.app',
// 		credentials: true,
// 	})
// )

app.use('/', mainRouter)
app.use('/auth', authRouter)
app.use('/notes', notesRouter)

// connecting to mongodb atlas
connect(MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
})
	.then(() => logger.info('MongoDB connection is established successfully! 🎉'))
	.catch((err) => logger.error('Something went wrong: ' + err?.message))

module.exports = app
