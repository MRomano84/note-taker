//Dependencies
const router = express.Router();
const dbNotes = require('../db/db.json');
const uuid = require('uuid');


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
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
}
try {
    dbNotes.push(newNote);
    res.json(dbNotes);
} catch (err) {
    res.status(500).end();
}
});

module.exports = router;

