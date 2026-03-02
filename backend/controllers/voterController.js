const Vote = require('../models/Vote.js');
const User = require('../models/User.js');
const Candidate = require('../models/Candidate.js');

const viewCandidates = async (req,res) => {
    try {
        res.json(await Candidate.find());
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const castVote = async (req, res) => {
  try {
    const candidateId = req.params.candidateId;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    if (user.hasVoted) {
      return res.status(400).json({ message: "You have already voted." });
    }
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate Not Found!" });
    }
    const existingVote = await Vote.findOne({ voter: userId });
    if (existingVote) {
      return res.status(400).json({ message: "Vote already recorded." });
    }
    await Vote.create({
      voter: userId,
      candidate: candidateId
    });
    await Candidate.findByIdAndUpdate(
      candidateId,
      { $inc: { totalVotes: 1 } }
    );
    user.hasVoted = true;
    await user.save();
    const io = req.app.get("io");
    io.emit("voteUpdated");

    res.status(200).json({
      message: "Thank you for voting!",
      candidate: {
        id: candidate._id,
        name: candidate.candidateName,
        party: candidate.party,
        constituency: candidate.constituency
      }
    });

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


const getStats = async (req, res) => {
    try {
        const totalVoters = await User.countDocuments({ role: "voter" });
        const candidates = await Candidate.find();
        const Vote = require("../models/Vote");
        const totalVotes = candidates.reduce(
        (sum, candidate) => sum + candidate.totalVotes, 0);

        const turnout =
        totalVoters === 0 ? 0 : ((totalVotes / totalVoters) * 100).toFixed(2);

        const currentUser = await User.findById(req.user._id);
        const voteRecord = await Vote.findOne({ voter: req.user.id });

        res.json({
        totalVoters,
        totalVotes,
        turnout,
        hasVoted: currentUser.hasVoted,
        votedAt: voteRecord ? voteRecord.createdAt : null,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {viewCandidates, castVote, getStats};