import * as React from "react";
import { useState } from "react";
import DashBoardNavigation from "../../UI/Navigation/DashBoardNavigation";
import MobileHeader from "../../UI/Navigation/MobileHeader";
import Contribution from "./Contribution";

function Contributions() {
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

      {/* User contributions */}
      <div className="contributions-wrapper">
        <h1 className="text-3xl text-center mb-5">User Contributions</h1>
        <Contribution />
      </div>
    </section>
  );
}

export default Contributions;
