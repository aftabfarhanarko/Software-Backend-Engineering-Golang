const express = require('express');
const router = express.Router();

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const filter = req.query.filter;

    res.status(200).send(`User ID: ${userId}, Filter: ${filter}`);
});

router.post('/user', (req, res) => {
    const { name, age } = req.body || {};
    console.log(name, age);
    if (!name || !age) {
        return res.status(400).json({ message: "Name and age are required" });
    }

    res.status(201).json({
        message: "User created Successfully",
        user: { name, age }
    });
});

module.exports = router;