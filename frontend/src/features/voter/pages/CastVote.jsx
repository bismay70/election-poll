import CandidateCardSkeleton from "../../../shared/components/skeletons/CandidateCardSkeleton";
import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import VoteModal from "../components/VoteModal";
import { getVoterCandidates, getVoterStats, submitVote } from "../voterApi";
import toast from "react-hot-toast";

const CastVote = () => {
  const [candidates, setCandidates] = useState([]);
  const [stats, setStats] = useState({});
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchData = async () => {
    try {
      const candidatesRes = await getVoterCandidates(config);
      const statsRes = await getVoterStats(config);

      setCandidates(candidatesRes.data);
      setStats(statsRes.data);
    } catch (err) {
      toast.error("Failed to load candidates.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmVote = async () => {
    if (!selectedCandidate) return;

    try {
      setSubmitting(true);

      await submitVote(selectedCandidate._id, config);

      toast.success("Vote submitted successfully!");

      setSelectedCandidate(null);
      fetchData();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Vote submission failed"
      );
      fetchData();
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Cast Your Vote</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <CandidateCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">
        Cast Your Vote
      </h1>

      {stats.hasVoted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          You have already voted. You can vote only once.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            hasVoted={stats.hasVoted}
            showVoteButton={!stats.hasVoted}
            isSelected={selectedCandidate?._id === candidate._id}
            onSelect={setSelectedCandidate}
          />
        ))}
      </div>

      {selectedCandidate && !stats.hasVoted && (
        <VoteModal
          candidate={selectedCandidate}
          onConfirm={handleConfirmVote}
          onClose={() => setSelectedCandidate(null)}
          loading={submitting}
        />
      )}
    </>
  );
};

export default CastVote;