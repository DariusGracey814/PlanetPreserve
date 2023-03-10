import React from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";

const Dashboard: React.FC = () => {
  return (
    <div>
      <DashBoardNavigation />
      <div className="border-2 border-blue-600">Dashboard</div>
    </div>
  );
};

export default Dashboard;
