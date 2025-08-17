const User = require('../models/User.js');
const Candidate = require('../models/Candidate.js');

const viewCandidates = async (req,res) => {
    try {
        res.json(await Candidate.find());
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const castVote = async (req,res) => {
    try {
      const candidateId = req.params.candidateId;
      const user = await User.findById(req.user.id);

      if(!user) return res.status(404).json({message: "User Not Found!"});

      if(user.hasVoted) return res.status(400).json({message: 'You have already voted.'});

      const candidate = await Candidate.findById(candidateId)
      if(!candidate) {
        return res.status(404).json({message: "Candidate Not Found!"});
      }
      
      candidate.totalVotes += 1;
      await candidate.save();

      user.hasVoted = true;
      await user.save();

      res.status(200).json({message: "Thank you for voting!", 
        candidate: {
                id: candidate._id,
                name: candidate.candidateName,
            }
        })
        
    } catch (error) {
         res.status(500).json({message: error.message});
    }
}

module.exports = {viewCandidates, castVote};