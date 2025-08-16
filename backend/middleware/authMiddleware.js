const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            
            if(!req.user) {
              return res.status(401).json({message: "User Not Found!"});
            }
            next();
        } catch (err) {
            return res.status(401).json({message: "Unauthorized!"});
        }
    }
    if(!token) {
        return res.status(401).json({message: "Not authorized, no token!"});
    }
}

module.exports = {auth};