const User = require('../models/User.js');
const Candidate = require('../models/Candidate.js');
const Vote = require('../models/Vote');

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const addCandidate = async (req, res) => {
  try {
    const { candidateName, party, constituency, email } = req.body;
    const tempPassword = Math.random().toString(36).slice(-8);

    const user = await User.create({
      name: candidateName,
      email,
      password: tempPassword,
      role: "candidate"
    });
    const candidate = await Candidate.create({
      candidateName,
      party,
      constituency,
      totalVotes: 0,
      user: user._id
    });

    res.status(201).json({
      message: "Candidate created successfully",
      credentials: { email, tempPassword }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCandidate = async (req, res) => {
  try {
    const candidateId = req.params.id;

    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    if (candidate.user) {
      await User.findByIdAndDelete(candidate.user);
    }

    await Candidate.findByIdAndDelete(candidateId);

    res.status(200).json({ message: "Candidate removed successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const getAdminStats = async (req, res) => {
  try {
    const totalVoters = await User.countDocuments({ role: 'voter' });
    const totalCandidates = await Candidate.countDocuments();
    const candidates = await Candidate.find();

    const votesCast = candidates.reduce(
      (sum, candidate) => sum + (candidate.totalVotes || 0),
      0
    );

    const turnoutRate =totalVoters === 0 ? 0 : ((votesCast / totalVoters) * 100).toFixed(1);

    res.json({
      totalVoters,
      votesCast,
      totalCandidates,
      turnoutRate,
      activeElections: 1,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {addCandidate, removeCandidate, getLiveVotes, getAdminStats, getAllCandidates};