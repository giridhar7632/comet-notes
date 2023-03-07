const { Schema, model } = require('mongoose')

const notesSchema = new Schema(
	{
		title: {
			type: String,
			default: 'Untitled',
		},
		content: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: new Date(),
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = model('Notes', notesSchema)
