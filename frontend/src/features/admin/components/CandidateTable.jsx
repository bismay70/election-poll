const CandidateTable = ({ candidates, onDelete }) =>  {
  return (
    <>
    <div className="hidden md:block">
    <table className="min-w-[600px] w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-4 py-3 font-medium text-gray-600">Name</th>
          <th className="px-4 py-3 font-medium text-gray-600">Party</th>
          <th className="px-4 py-3 font-medium text-gray-600">Constituency</th>
          <th className="px-4 py-3 font-medium text-gray-600">Votes</th>
          <th className="px-4 py-3 font-medium text-right text-gray-600">Action</th>
        </tr>
      </thead>

      <tbody>
        {candidates.map((candidate) => (
          <tr
            key={candidate._id}
            className="border-b border-gray-200 last:border-none hover:bg-indigo-50/40 transition"
          >
            <td className="px-4 py-3 whitespace-nowrap text-gray-700">
              {candidate.candidateName}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-gray-700">
              {candidate.party}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-gray-700">
              {candidate.constituency}
            </td>
            <td className="px-4 py-3 text-gray-700">
              {candidate.totalVotes}
            </td>
            <td className="px-4 py-3 text-right">
              <button
                onClick={() => onDelete(candidate._id)}
                className="text-red-500 hover:text-red-600 transition-all duration-200 hover:scale-110"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    <div className="md:hidden space-y-4">
    {candidates.map((candidate) => (
      <div key={candidate._id} className="bg-white p-4 rounded-lg shadow">
        <div className="font-semibold">
          {candidate.candidateName}
        </div>
        <div className="text-sm text-gray-500">
          {candidate.party} • {candidate.constituency}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span>Votes: {candidate.totalVotes}</span>
          <button
            onClick={() => onDelete(candidate._id)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</>
  );
}

export default CandidateTable;