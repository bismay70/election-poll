const Candidate = require('../models/Candidate.js');

const getVoteCount = async (req, res) => {
try{
    const candidateId = req.user.id;
    const candidate = await Candidate.findById(candidateId);
   
    if(!candidate) return res.status(404).json({message: "Candidate Not Found!"});
    res.status(200).json({candidate: {
                id: candidate._id,
                name: candidate.name,
                totalVotes: candidate.totalVotes
    }})
} catch(err) {
    res.status(500).json({message: err.message});
}}

module.exports = {getVoteCount}