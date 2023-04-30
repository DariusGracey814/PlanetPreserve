import * as React from "react";
import { useDispatch } from "react-redux";
import deleteContribution from "../../../../api/deleteContribution";
import { AppDispatch } from "../../../../store/store";

interface Props {
  contributionId: number;
  contributionType: string;
  contributionDesc: string;
  enteredDate: string;
  setDeleted: any;
  all?: boolean;
}

function Contribution({
  contributionType,
  contributionDesc,
  enteredDate,
  contributionId,
  setDeleted,
  all,
}: Props) {
  const user = sessionStorage.getItem("username");
  const dispatch = useDispatch<AppDispatch>();

  const deleteContributionHandler = (evt: { currentTarget: any }) => {
    const id: number =
      evt.currentTarget.parentNode.parentNode.parentNode.parentNode.id;

    dispatch(deleteContribution(id))
      .then((res) => {
        if (res) {
          setDeleted(true);
        }
      })
      .catch((err) => {
        return err === Error ? err?.message : null;
      });
  };

  return (
    <div className="card card-grid shadow-lg" id={`${contributionId}`}>
      <div className="card-user">
        <span>{all ? "C" : user[0]}</span>
      </div>
      <div className="contribution-col2">
        <div className={`${all ? "col-row--true" : "col-row"}`}>
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
          {!all ? (
            <div className="contribution-btn--wrapper">
              <button
                className={"contribution-btn"}
                onClick={deleteContributionHandler}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contribution;
