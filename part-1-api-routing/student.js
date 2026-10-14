const express = require("express");
const router =  express.Router();

router.get('/student', (req,res)  =>{
  res.status(200).send("OKK Student")
})

module.exports = router;
