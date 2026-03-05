import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StatsCardSkeleton = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <Skeleton height={20} width={120} />
      <Skeleton height={40} width={80} style={{ marginTop: 10 }} />
    </div>
  );
};

export default StatsCardSkeleton;