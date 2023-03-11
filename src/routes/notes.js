const router = require('express').Router()
const { isAuth } = require('../utils/isAuth')
const Notes = require('../models/notes')

router.get('/', isAuth, async (req, res) => {
	try {
		const notes = await Notes.find({ user_id: req.user.id })
		console.log(notes)
		res.json({ data: notes })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
})

router.post('/', isAuth, async (req, res) => {
	try {
		// 1. Create a note
		const { title, content } = req.body
		const newNote = new Notes({
			title,
			content,
			user_id: req.user.id,
		})

		// 2. Save note to database
		await newNote.save()
		res.status(200).json({ message: 'Notes created. ✌', type: 'success' })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
})

router.get('/:id', isAuth, async (req, res) => {
	try {
		const note = await Notes.findById(req.params.id)
		res.json(note)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
})

router.put('/:id', isAuth, async (req, res) => {
	try {
		const { title, content } = req.body
		await Notes.findOneAndUpdate({ _id: req.params.id }, { title, content })

		res.json({ message: 'Notes updated 🎉', type: 'info' })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
})

router.delete('/:id', isAuth, async (req, res) => {
	try {
		await Notes.findByIdAndDelete(req.params.id)
		res.json({ message: 'Note Deleted', type: 'success' })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
})

module.exports = router
