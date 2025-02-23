const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const user = require('../model/user')

const signUp = async (req, res)=>{
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

const { name, email, password } = req.body;

try {
  let userRegisterFind = await user.findOne({ email });
  if (userRegisterFind) return res.status(400).json({ message: "User already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

   userRegisterFind = await user.create({ name, email, password: hashedPassword });

  return res.status(201).json({ "success": true, message: "User registered successfully" });
} catch (error) {
  return res.status(500).json({ message: "Server Error" });
}
}



const logIn = async (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  
  try {
    const findUser = await user.findOne({ email }); 
    if (!findUser) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ "success": true, message: "Sucessfully login" , token, _id: findUser.id, name: findUser.name, email: findUser.email });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }

}


module.exports = {
    signUp,
    logIn
}
