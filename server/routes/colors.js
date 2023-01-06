const express = require('express');

const router = express.Router();

app.get('/', (req, res) => {
    res.json("Here are colors");
});

app.get('/:name', (req, res) => {
    let color = req.params.name
    res.json({ color })
});


module.exports = router;
