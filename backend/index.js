const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use((req,res) => {
    res.send('Server Created Successfully!');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`);
});