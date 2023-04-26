import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import getContributions from "../../../../api/getContributions";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import Contribution from "./Contribution";
import { AppDispatch } from "../../../../store/store";

interface Contribution {
  timestamp: any;
  contributionId: number;
  type: string;
  description: string;
  date: Date;
}

function Contributions() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);
  const [contributions, setContributions] = useState<Contribution[]>();
  const [defaultContributions, setDefaultContributions] =
    useState<Contribution[]>();
  const [sort, setSort] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const authenticated = sessionStorage.getItem("authenticatedUser");
  const username = sessionStorage.getItem("username");

  const user = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchUserContributions = async () => {
      dispatch(getContributions({ username, authenticated }))
        .then((res) => {
          setContributions(res.payload);
          setDefaultContributions(res.payload);
        })
        .catch((err) => {
          return err?.message;
        });
    };

    fetchUserContributions();

    return () => {
      console.log("Cleaning things up");
    };
  }, []);

  // Side Effect for sort button
  useEffect(() => {
    if (sort) {
      const copy = contributions.slice();
      const sortedContributions: Contribution[] = copy.sort((a, b) => {
        if (a.timestamp > b.timestamp) return 1;
        if (a.timestamp < b.timestamp) return -1;
        return 0;
      });

      setContributions(sortedContributions);
    } else {
      setContributions(defaultContributions);
    }
  }, [sort, setSort]);

  const sortContributionsHandler = () => {
    setSort((prevState) => !prevState);
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

      {/* User contributions */}
      <div className="contributions-wrapper">
        <h1 className="text-3xl text-center contribution-h1">{`${user} - Eco Contributions`}</h1>
        <div className="sort-wrapper flex justify-end">
          <button
            className="sortBtn"
            type="button"
            onClick={sortContributionsHandler}
          >
            {!sort ? "Sort by Date" : "Default Sort"}
          </button>
        </div>
        {/* Map threw and display user contributions */}
        {contributions?.map((contribution) => {
          let formattedDate = new Date(contribution.timestamp)
            .toISOString()
            .split("T")[0]
            .split("-");

          const newDate = `${formattedDate[1]}-${formattedDate[2]}-${formattedDate[0]}`;

          return (
            <Contribution
              key={contribution.contributionId}
              contributionType={contribution.type}
              contributionDesc={contribution.description}
              enteredDate={newDate}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Contributions;
