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
    party: {
        type: String,
    },
    constituency: {
        type: String,
    },
    symbol: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    }
    }, {timestamps: true} 
);

module.exports = mongoose.model('Candidate', candidateSchema)