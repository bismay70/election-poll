const AnalyticsSkeleton = () => {
  return (
    <div className="space-y-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="h-5 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-56 w-56 bg-gray-200 rounded-full mx-auto"></div>
          <div className="h-4 w-40 bg-gray-200 rounded mt-6 mx-auto"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="h-5 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-16 bg-gray-200 rounded mb-6"></div>
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="h-5 w-40 bg-gray-200 rounded mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
        </div>
        <div className="h-3 w-full bg-gray-200 rounded mt-6"></div>
        <div className="h-4 w-32 bg-gray-200 rounded mt-4 mx-auto"></div>
      </div>
    </div>
  );
};

export default AnalyticsSkeleton;