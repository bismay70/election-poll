import React from "react";

const OverviewCard = ({ label, value }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500">{label}</p>
      <h2 className="text-3xl font-bold mt-2">
        {value ?? 0}
      </h2>
    </div>
  );
};

export default OverviewCard;