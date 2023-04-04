import * as React from "react";
import { useState } from "react";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import Stats from "../../Stats/Stats";

const AddContribution: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <section className="contribution_section grid dashboard_grid w-full h-full">
      <div
        className={`mobile-navigation ${
          expanded ? "mobile-navigation--active" : ""
        }`}
      >
        <DashBoardNavigation expanded={expanded} setExpanded={setExpanded} />
      </div>
      {/* Mobile header */}
      <MobileHeader
        expanded={expanded}
        setExpanded={setExpanded}
        hidden={hidden}
        setHidden={setHidden}
      />

      <div className="flex flex-col">
        <h1 className="form-h1 text-2xl mb-2 text-center py-3">
          Add Contribution
        </h1>
        <form
          method="post"
          className="relative contribution-form p-12 rounded-xl shadow-xl"
        >
          {/* {loadState ? <LoadingSpinner /> : null} */}

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="ContributionType" className="form-label">
              Contribution Type
            </label>
            <input
              type="text"
              id="contributionType"
              name="contributionType"
              className="relative form-control2 border shadow-sm"
              aria-describedby="username"
              // readOnly={loadState ? true : false}
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="contributionDesc" className="form-label">
              Description
            </label>
            <textarea className="form-control2 border shadow-sm"></textarea>
          </div>

          <div className="flex flex-col mb-1">
            <label htmlFor="contributionDate" className="form-label">
              Contribution Date
            </label>
            <input
              type="date"
              className="form-control2 border shadow-sm"
              // readOnly={loadState ? true : false}
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-form"
            // disabled={loadState ? true : false}
          >
            Add Contribution
          </button>
        </form>

        {/* Contributions Stats */}
        <Stats hidden={hidden} />
      </div>
    </section>
  );
};

export default AddContribution;
