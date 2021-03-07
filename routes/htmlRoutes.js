//Dependencies
const router = require('express').Router();
// const express = require('express');
const path = require('path');

//Main page - index.html
router.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});

//The notes page - notes.html
router.get("/notes", (req, res) => {
    try { 
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    } catch (err) {
        res.status(500).end();
    }
});

//Redirect so anything after '/' that's not '/notes' goes to index.html
router.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;