const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    candidateName: {
        type: String, 
        required: true
    },
    totalVotes: 
    {   type: Number, 
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Candidate', candidateSchema)