import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";
import VoteModal from "./VoteModal";
import { getVoterCandidates, getVoterStats, submitVote } from "./voterApi";

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
      console.error("Error loading candidates:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmVote = async () => {
    if (!selectedCandidate) return;

    try {
      setSubmitting(true);
      await submitVote(selectedCandidate._id, config);
      setSelectedCandidate(null);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Vote submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-10">
        Loading candidates...
      </div>
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