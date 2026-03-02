import React from "react";

const VoteModal = ({ candidate, onConfirm, onClose, loading }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-lg font-bold mb-4">
          Confirm Your Vote
        </h3>

        <p className="text-gray-600 mb-6">
          You are about to vote for{" "}
          <span className="font-semibold">
            {candidate.candidateName}
          </span>{" "}
          ({candidate.party}).
          <br />
          <span className="text-sm text-red-500">
            You cannot change your vote later.
          </span>
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Confirm Vote"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;