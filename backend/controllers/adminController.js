const User = require('../models/User.js');
const Candidate = require('../models/Candidate.js');

const addCandidate = async (req,res) => {
    try {
        const candidate = await Candidate.create(req.body);
        res.status(201).json(candidate);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const removeCandidate = async (req,res) => {
    try {
        const candidateId = req.params.id;
        const candidate = await Candidate.findByIdAndDelete(candidateId);
        if (!candidate) return res.status(404).json({ message: "Candidate not found" });
        res.status(200).json({ message: "Candidate removed successfully" });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getLiveVotes = async (req, res) => {
try{
    const candidates = await Candidate.find();

    res.status(200).json({
      candidates: candidates.map(item => ({
        id: item._id,
        name: item.candidateName,
        totalVotes: item.totalVotes
      }))
    });
} catch(error) {
    res.status(500).json({message: error.message});
}}

module.exports = {addCandidate, removeCandidate, getLiveVotes}