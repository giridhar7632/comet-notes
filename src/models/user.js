const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	verified: { type: Boolean, default: false },
	refreshtoken: { type: String },
})

module.exports = model('User', userSchema)
