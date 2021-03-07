//Dependencies
const router = require('express').Router();
const dbNotes = require('../db/db');
const { v4: uuidv4 } = require('uuid');

//Grab the json data
router.get('/notes', (req, res) => {
    try {
        res.json(dbNotes);
    } catch (err) {
        res.status(500).end();
    }
});

//Edit json data with new note
router.post('/notes', async (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    try {
        dbNotes.push(newNote);
        res.json(dbNotes);
    } catch (err) {
        res.status(500).end();
    }
});

//Delete note
router.delete('/notes/:id', (req, res) => {
    let noteIndex = dbNotes.findIndex( elem => {
        return elem.id == req.params.id
    });
    try {
        dbNotes.splice(noteIndex, 1);
        res.json(dbNotes);
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;

