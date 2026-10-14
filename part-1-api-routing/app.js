const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./user');
const userRoutes2 = require('./student');
const userRoutes3 = require('./payment');

// Register routes
app.use('/', userRoutes,userRoutes2,userRoutes3);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port.........${PORT}`);
});