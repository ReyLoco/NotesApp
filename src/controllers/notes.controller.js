const notesCtrl ={};

const Note = require('../models/Note');


notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const {  author, title, content, date } = req.body;
    const newNote = new Note({  author, title, content, date });
    await newNote.save();
    res.json({content: "Note saved"})
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    const {  author, title, content, date } = req.body;

    await Note.findOneAndUpdate({_id: req.params.id}, {  author, title, content, date });
    res.json({content: "Note updated"})
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({content: "Note Deleted"})
};

module.exports = notesCtrl;
