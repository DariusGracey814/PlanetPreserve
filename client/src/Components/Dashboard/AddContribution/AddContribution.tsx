import * as React from "react";
import { useState, useRef, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contributionSliceActions } from "../../../../store/contribution";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import Stats from "../../Stats/Stats";
import { RootState } from "../../../../store/store";

const AddContribution: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Form Refs
  const contributionType = useRef(null);
  const description = useRef(null);
  const date = useRef(null);

  const dispatch = useDispatch();

  // Contribution Form Data
  const cType = useSelector((state: RootState) => state.Contribution.type);
  const cDesc = useSelector(
    (state: RootState) => state.Contribution.description
  );
  const cDate = useSelector((state: RootState) => state.Contribution.date);

  console.log({
    type: cType,
    description: cDesc,
    date: cDate,
  });

  const contributionInfo = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (
      contributionType.current.value! !== "" &&
      description.current.value! !== "" &&
      date.current.value!
    ) {
      setError(false);
      dispatch(
        contributionSliceActions.setType(contributionType.current.value!)
      );
      dispatch(
        contributionSliceActions.setDescription(description.current.value!)
      );
      dispatch(contributionSliceActions.setDate(date.current.value!));
    } else {
      setError(true);
    }
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
        >
          {/* {loadState ? <LoadingSpinner /> : null} */}
          {error ? (
            <div className="text-white bg-red-200 text-center para">
              Fields Cannot be empty!
            </div>
          ) : null}

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
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-form"
            onClick={contributionInfo}
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
