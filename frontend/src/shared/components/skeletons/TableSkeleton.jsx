import Skeleton from "react-loading-skeleton";

const TableSkeleton = ({ rows = 6, cols = 4 }) => {
  return (
    <div className="space-y-3">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className={`grid grid-cols-${cols} gap-4`}>
          {[...Array(cols)].map((_, j) => (
            <Skeleton key={j} height={20} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;