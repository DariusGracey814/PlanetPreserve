import * as React from "react";

interface Props {
  contributionType: string;
  contributionDesc: string;
  enteredDate: string;
}

function Contribution({
  contributionType,
  contributionDesc,
  enteredDate,
}: Props) {
  const user = sessionStorage.getItem("username");

  return (
    <div className="card card-grid shadow-lg">
      <div className="card-user">
        <span>{user[0]}</span>
      </div>
      <div className="contribution-col2">
        <div className="col-row">
          <div className={"content-wrapper"}>
            {/*  Col 1 */}
            <div className="con-col">
              <p className="con-header">Type</p>
              <p className="con-text">{contributionType}</p>
            </div>

            {/* Col 2 */}
            <div className="con-col">
              <p className="con-header">Description</p>
              <p className="con-text">{contributionDesc}</p>
            </div>

            {/* Col 3 */}
            <div className="con-col col-3">
              <p className="con-header">Date</p>
              <p className="con-text">{enteredDate}</p>
            </div>
          </div>

          {/* Col 4 */}
          <div className="contribution-btn--wrapper">
            <button id="btn-update" className={"contribution-btn"}>
              Update
            </button>
            <button className={"contribution-btn"}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
