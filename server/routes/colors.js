const express = require('express');

const router = express.Router();

app.get('/', (req, res) => {
    res.json("Here are colors");
});

app.get('/:name', (req, res) => {
    res.json("Here is a specific color");
});


module.exports = router;
