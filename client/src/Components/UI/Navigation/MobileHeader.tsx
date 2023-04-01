import React, { Dispatch, SetStateAction, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

interface Props {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
}

function MobileHeader({ expanded, setExpanded, hidden, setHidden }: Props) {
  // Navigation toggle
  function toggleNavigation() {
    setExpanded((prevState) => !prevState);
  }

  // Dashboard Toggle
  function toggleStats() {
    setHidden((prevState) => !prevState);
  }

  return (
    <div className="mobile-header justify-between">
      {/* Mobile Navigation */}
      <div className="mobile-nav--wrapper">
        <button
          className="mobile-nav"
          aria-controls="DashboardMobileNavigation"
          aria-expanded={`${expanded}`}
          aria-label="mobile navigation"
          onClick={toggleNavigation}
        >
          <BiMenuAltLeft className="mobile-nav" />
        </button>

        <div className="my-1 absolute top-0 right-0">
          <button
            className="contributions-tab flex items-center"
            onClick={toggleStats}
          >
            {hidden ? <BsFillArrowLeftSquareFill /> : <AiFillCloseSquare />}{" "}
            &nbsp; {hidden ? "Stats" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
