const mongoose = require('mongoose')
const voteSchema = mongoose.Schema({
    voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})