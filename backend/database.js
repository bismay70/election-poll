const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to Database!');
})
    .catch((err) => {
        console.log(`Couldn't connect to Database: `, err.message);
        process.exit(1);
})
}

module.exports = connectToDB;