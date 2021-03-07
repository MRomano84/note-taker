const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req, res) => {
    try { 
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    } catch (err) {
        res.status(500).end();
    }
});

router.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;