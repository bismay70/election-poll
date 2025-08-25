const express = require('express');
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
const adminRoutes = require('./routes/adminRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const voterRoutes = require('./routes/voterRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/candidate', candidateRoutes);
app.use('/voter', voterRoutes);
app.use('/contact', contactRoutes);

app.get('/', (req,res) => {
    res.status(200).json({message: "Voting System API Created Successfully!"});
})
app.use((req,res) => {
    res.status(404).json({message: "Route not found"});
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`);
});