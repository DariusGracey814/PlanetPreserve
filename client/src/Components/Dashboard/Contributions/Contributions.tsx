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

  const dispatch = useDispatch<AppDispatch>();
  const authenticated = sessionStorage.getItem("authenticatedUser");
  const username = sessionStorage.getItem("username");

  const user = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchUserContributions = async () => {
      dispatch(getContributions({ username, authenticated }))
        .then((res) => {
          setContributions(res.payload);
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
        <div className="flex justify-end">
          <button className="sortBtn">Sort Contributions</button>
        </div>
        {/* Map threw and display user contributions */}
        {contributions?.map((contribution) => {
          let formattedDate = new Date(contribution.timestamp)
            .toISOString()
            .split("T")[0]
            .split("-");
          console.log(formattedDate);

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
