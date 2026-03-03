const Candidate = require("../models/Candidate");
const User = require("../models/User");
const Vote = require("../models/Vote");

const getVoteCount = async (req, res) => {
  try {
    const candidate = await Candidate.findOne({ user: req.user.id });
    if (!candidate) {
      return res.status(404).json({ message: "Candidate Not Found!" });
    }
    const higherRankCount = await Candidate.countDocuments({
      totalVotes: { $gt: candidate.totalVotes }
    });
    const rank = higherRankCount + 1;
    const totalCandidates = await Candidate.countDocuments();
    const totalVoters = await User.countDocuments({ role: "voter" });

    return res.status(200).json({
      candidate: {
        id: candidate._id,
        name: candidate.candidateName,
        totalVotes: candidate.totalVotes,
        rank: rank
      },
      platformStats: {
        totalCandidates,
        totalVoters
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getVoteTrend = async (req, res) => {
  try {
    const candidate = await Candidate.findOne({ user: req.user.id });
    const trend = await Vote.aggregate([
      { $match: { candidate: candidate._id } },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          },
          votes: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(trend);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCandidateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const candidate = await Candidate.findOne({ user: req.user.id });

    if (!candidate) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      party: candidate.party,
      constituency: candidate.constituency,
      symbol: candidate.symbol,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getVoteCount, getVoteTrend, getCandidateProfile };