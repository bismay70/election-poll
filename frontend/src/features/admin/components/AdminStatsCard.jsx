const AdminStatsCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] cursor-default">
      <h3 className="text-sm font-medium text-gray-500 mb-2">
        {title}
      </h3>
      <p className="text-2xl font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
};

export default AdminStatsCard;