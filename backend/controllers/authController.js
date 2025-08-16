const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'});

const register =  async (req,res) => {
try{
    const {name, email, password, role} = req.body;
    if (await User.findOne({email})) 
        return res.status(400).json({message: 'Email Already in Use'});

    const user = await User.create({ name, email, password, role});

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


const login = async (req,res) => {
    try {
      const { email, password }  = req.body;
      const user = await User.findOne({email});

      if(!user || !await user.matchPassword(password))
        return res.status(401).json({message: "Invalid Credentials!"});
    
      res.json({
        _id: user.id, 
        name: user.name, 
        email: user.email, 
        role: user.role,
        token: generateToken(user.id)
      })

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {register, login};