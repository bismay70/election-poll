const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    if (!req.headers.authorization?.startsWith("Bearer ")) {
  return res.status(401).json({ message: "Not authorized, no token!" });
}

try {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id).select("-password");

  if (!req.user) {
    return res.status(401).json({ message: "User Not Found!" });
  }

  next();
} catch (err) {
  return res.status(401).json({ message: "Unauthorized!" });
}
}

module.exports = {auth};