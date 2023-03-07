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
app.use((_req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	)
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(requestLogger)
// app.use(cors())

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
