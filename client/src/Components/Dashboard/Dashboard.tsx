import React from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";

const Dashboard: React.FC = () => {
  return (
    <section>
      <DashBoardNavigation />
      <div className="border-2 border-blue-600">Dashboard</div>
    </section>
  );
};

export default Dashboard;
