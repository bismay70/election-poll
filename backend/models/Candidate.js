const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    candidateName: {
        type: String, 
        required: true
    },
    totalVotes: 
    {   type: Number,
        required: true, 
        default: 0
    },
    party: {
        type: String,
    },
    constituency: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Candidate', candidateSchema)