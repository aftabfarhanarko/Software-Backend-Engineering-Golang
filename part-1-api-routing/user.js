const express = require("express");
const router = express.Router();
const Joi = require("joi");

// Joi validation schema
const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  age: Joi.number().integer().min(1).max(120).required(),
  address: Joi.string().min(3).max(100).optional().allow("", null),
  locations: Joi.string().optional().allow("", null),
}).unknown(true);

// OOP concept
class User {
  constructor({ name, age, address, locations }) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.locations = locations;
  }
}

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;

  res.status(200).send(`User ID: ${userId}, Filter: ${filter}`);
});

router.post("/user", (req, res) => {
  // Validate request body with Joi
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  const user = new User(value);

  res.status(201).json({
    success: true,
    message: "User created Successfully",
    user: user,
  });
});

module.exports = router;
