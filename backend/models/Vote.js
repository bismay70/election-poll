const mongoose = require('mongoose')
const voteSchema = new mongoose.Schema(
  {
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true
    }
  },
  { timestamps: true }
);

voteSchema.index({ voter: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);