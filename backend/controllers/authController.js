const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'});

const register =  async (req,res) => {
try{
    const {name, email, password, role} = req.body;
    if (await User.findOne({ email: email.toLowerCase() }))
        return res.status(400).json({message: 'Email Already in Use'});
    
    let assignedRole = "voter";
    if (role === "admin") {
      const admins = await User.countDocuments({role: "admin"});
      if (admins >= 2) {
        return res.status(403).json({message: "You are Unauthorized to do this!"});
      }
      assignedRole = "admin";
    }

    if (role === "candidate") {
      return res.status(403).json({ message: "Candidates cannot self-register. Please contact Admin." });
    }

    const user = await User.create({name, email, password, role: assignedRole});

    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id)
    })
} catch(err) {
    res.status(500).json({message: err.message });
}}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Email entered:", email);

    const user = await User.findOne({
      email: email.toLowerCase()
    });

    console.log("User found:", user);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    const isMatch = await user.matchPassword(password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      console.log("Password incorrect");
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });

  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({ message: err.message });
  }
};


module.exports = {register, login};