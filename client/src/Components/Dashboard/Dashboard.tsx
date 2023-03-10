import React from "react";
import DashBoardNavigation from "../UI/Navigation/DashBoardNavigation";

const Dashboard: React.FC = () => {
  return (
    <section className="grid dashboard_grid w-screen h-screen">
      <DashBoardNavigation />
      <div className="">Dashboard</div>
    </section>
  );
};

export default Dashboard;
