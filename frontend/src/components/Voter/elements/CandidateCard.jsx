import React from "react";
import { User } from "lucide-react";

const CandidateCard = ({
  candidate,
  hasVoted,
  showVoteButton = false,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg
        ${
          isSelected
            ? "border-indigo-600 ring-2 ring-indigo-200"
            : "border-gray-200 hover:shadow-md"
        }`}
      onClick={() => {
        if (!hasVoted && showVoteButton && onSelect) {
          onSelect(candidate);
        }
      }}
    >
      <div className="flex gap-4 items-start">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
          <User size={22} className="text-gray-500" />
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800">
            {candidate.candidateName}
          </h3>

          <p className="text-sm text-gray-600 mb-2">
            {candidate.party}
          </p>

          {candidate.manifesto && (
            <p className="text-sm text-gray-500 line-clamp-2">
              {candidate.manifesto}
            </p>
          )}
        </div>
      </div>

      {showVoteButton && !hasVoted && (
        <button
          className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition
            ${
              isSelected
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 hover:bg-indigo-50 text-gray-700"
            }`}
        >
          {isSelected ? "Selected" : "Select Candidate"}
        </button>
      )}

      {hasVoted && (
        <span className="mt-4 block w-full text-center py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-600">
          Vote Locked
        </span>
      )}
    </div>
  );
};

export default CandidateCard;