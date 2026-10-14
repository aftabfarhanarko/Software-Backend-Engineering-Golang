const express  = require('express');
const router = express.Router();

router.get('/user/:id/payment', (req,res) => {
    console.log(`${req.authInfo}`);
    res.status(200).send(`Payment Done....`)
})

module.exports = router;