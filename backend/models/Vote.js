const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
    voterId: {
        type: Number, 
        required: true},
    candidateId: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('Vote', voteSchema)