import Skeleton from "react-loading-skeleton";

const CandidateCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Skeleton height={160} borderRadius={10} />

      <div className="mt-4 space-y-2">
        <Skeleton height={20} width="60%" />
        <Skeleton height={16} width="40%" />
      </div>

      <div className="mt-4">
        <Skeleton height={36} borderRadius={8} />
      </div>
    </div>
  );
};

export default CandidateCardSkeleton;