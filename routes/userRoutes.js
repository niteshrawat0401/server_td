const express = require("express");
const router = express.Router();
const { validateRegister, validateLogin } = require("../validation/userValidation");
const { signUp, logIn } = require("../controller/userController");

// Register Route
router.post("/register", validateRegister, signUp);

// Login Route
router.post("/login", validateLogin, logIn);

module.exports = router;
