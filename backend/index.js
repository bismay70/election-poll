const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsConfig = require('./corsConfig');
const database = require('./database');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
database();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/authRoutes');
const voterRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/candidate', candidateRoutes);
app.use('/voter', voterRoutes)

app.use((req,res) => {
    res.send('Server Created Successfully!');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`);
});