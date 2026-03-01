const Contact = require('../models/Contact.js');

const postMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Contact.create({ name, email, message });
    return res.status(201).json({
      message: "Message sent successfully!"
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { postMessage };