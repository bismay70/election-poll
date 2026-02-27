import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVoterStats } from "./voterApi";

const MyStatus = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await getVoterStats(config);
        setStats(res.data);
      } catch (err) {
        setError("Failed to fetch voting status.");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading status...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        My Voting Status
      </h1>

      {/* If Not Voted */}
      {!stats.hasVoted ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            You have not voted yet.
          </h2>

          <button
            onClick={() => navigate("/voter/cast")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Go to Cast Vote
          </button>
        </div>
      ) : (
        <>
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Vote Successfully Submitted!
            </h2>

            <p className="text-green-700">
              Thank you for participating in the democratic process.
            </p>

            {stats.votedAt && (
              <p className="text-sm text-green-600 mt-2">
                Voted On:{" "}
                {new Date(stats.votedAt).toLocaleString()}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyStatus;