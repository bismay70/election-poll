import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import CandidateTable from "../components/CandidateTable";
import AddCandidateModal from "../components/AddCandidateModal";
import { addCandidate, deleteCandidate } from "../adminApi";
import api from "../../../services/api";
import TableSkeleton from "../../../shared/components/skeletons/TableSkeleton";

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newCredentials, setNewCredentials] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchCandidates = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/candidates");
      setCandidates(res.data || []);
    } catch (err) {
      toast.error("Failed to fetch candidates");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  const handleAddCandidate = async (data) => {
    try {
      const res = await addCandidate(data);
      setShowModal(false);
      setNewCredentials(res.credentials);
      fetchCandidates();

    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding candidate");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteCandidate(id);
      toast.success(res.data.message);
      fetchCandidates();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error deleting candidate");
    }
  };

  return (
    <>
      <div className="space-y-6 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">
              Candidate Management
            </h1>
            <p className="text-gray-500">
              Add, view, and manage election candidates.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            + Add Candidate
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4 sm:p-6">
          <div className="overflow-x-auto">
            {loading ? (
              <TableSkeleton rows={6} cols={4} />
            ) : candidates.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No candidates available.
              </div>
            ) : (
              <CandidateTable
                candidates={candidates}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <AddCandidateModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddCandidate}
        />
      )}

      {newCredentials && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">

            <h2 className="text-lg font-bold mb-4 text-green-600">
              Candidate Created Successfully!
            </h2>

            <div className="space-y-4 text-sm">

              <div className="bg-gray-50 p-3 rounded-lg border">
                <p className="text-gray-500 text-xs">Login Email</p>
                <p className="font-medium break-all">
                  {newCredentials.email}
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border">
                <p className="text-gray-500 text-xs">Temporary Password</p>
                <p className="font-medium">
                  {newCredentials.tempPassword}
                </p>
            
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(newCredentials.tempPassword);
                    setCopied(true);

                    setTimeout(() => {
                      setCopied(false);
                    }, 2000);
                  }}
                  className="text-indigo-600 text-xs mt-2 hover: transition cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy Password"}
                </button>
              </div>

              <p className="text-xs text-red-500">
                Save these credentials now. They will not be shown again.
              </p>

            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setNewCredentials(null)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CandidateManagement;