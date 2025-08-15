const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    candidateName: {
        type: String, 
        required: true
    },
    totalVotes: 
    {   type: String, 
        default: 0
    }
})

module.exports = mongoose.model('Candidate', candidateSchema)