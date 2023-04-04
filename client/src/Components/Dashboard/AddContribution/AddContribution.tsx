import * as React from "react";
import { useState, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import Stats from "../../Stats/Stats";

const AddContribution: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  // Form Refs
  const contributionType = useRef(null);
  const description = useRef(null);
  const date = useRef(null);

  const dispatch = useDispatch();

  const contributionInfo = (evt: FormEvent) => {
    evt.preventDefault();

    console.log(contributionType.current.value!);
    console.log(description.current.value!);
    console.log(date.current.value!);
  };

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
          onSubmit={contributionInfo}
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
              ref={contributionType}
              // readOnly={loadState ? true : false}
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="contributionDesc" className="form-label">
              Description
            </label>
            <textarea
              className="form-control2 border shadow-sm"
              ref={description}
            ></textarea>
          </div>

          <div className="flex flex-col mb-1">
            <label htmlFor="contributionDate" className="form-label">
              Contribution Date
            </label>
            <input
              type="date"
              className="form-control2 border shadow-sm"
              ref={date}
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
