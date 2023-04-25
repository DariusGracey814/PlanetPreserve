import * as React from "react";

interface Props {
  id: number;
  type: string;
  description: string;
  date: Date;
}

function Contribution() {
  const user = sessionStorage.getItem("username");

  return (
    <div className="card card-grid shadow-lg">
      <div className="card-user">
        <span>{user[0]}</span>
      </div>
      <div className="contribution-col2">Contribution</div>
    </div>
  );
}

export default Contribution;
