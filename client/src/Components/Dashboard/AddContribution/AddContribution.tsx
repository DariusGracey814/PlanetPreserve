import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contributionSliceActions } from "../../../../store/contribution";
import addContribution from "../../../../api/addContribution";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import Stats from "../../Stats/Stats";
import { AppDispatch, RootState } from "../../../../store/store";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { LoadingSpinnerFull } from "../../LoadingSpinner/LoadingSpinner";

const AddContribution: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formClick, setFormClick] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // Form Refs
  const contributionType = useRef(null);
  const description = useRef(null);
  const date = useRef(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // User location

  // Contribution Form Data
  const cType = useSelector((state: RootState) => state.Contribution.type);
  const cDesc = useSelector(
    (state: RootState) => state.Contribution.description
  );
  const cDate = useSelector((state: RootState) => state.Contribution.date);

  const latitude = sessionStorage.getItem("latitude");
  const longitude = sessionStorage.getItem("longitude");

  // Make post fetch to add contribution api route
  useEffect(() => {
    const authenticated: string = sessionStorage.getItem("authenticatedUser");
    const username: string = sessionStorage.getItem("username");

    const timestamp = Date.parse(cDate);

    const contribution = {
      type: cType,
      description: cDesc,
      timestamp: timestamp,
      authenticated: authenticated,
      username: username,
      latitude: +latitude,
      longitude: +longitude,
    };

    if (formClick > 0) {
      dispatch(addContribution(contribution))
        .then((res) => {
          setLoading(true);
          console.log("Added Contribution: ", res);
          if (
            res.payload.toLowerCase() === "successfully added user contribution"
          ) {
            console.log("Success");
            // Navigate to contributions
            setTimeout(() => {
              navigate("/planet-preserve/contributions");
              setLoading(false);
            }, 2000);
          }
        })
        .catch((err) => {
          return err.message;
        });
    }
  }, [formClick, setFormClick]);

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

    setFormClick((prevCount) => prevCount + 1);
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

      <div className="relative">
        {loading ? (
          <LoadingSpinnerFull />
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default AddContribution;
