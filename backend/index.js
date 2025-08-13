const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
const app = express();

app.use((req,res) => {
    res.send('Server Created Successfully!');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`);
});