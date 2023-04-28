import * as React from "react";
import { useState, useEffect } from "react";
import getContributions from "../../../api/getContributions";
import { getAllContributions } from "../../../api/getContributions";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AppDispatch } from "../../../store/store";

interface Props {
  hidden: boolean;
}

function Stats({ hidden }: Props) {
  const [contributions, setContributions] = useState<number>(0);
  const [allContributions, setAllContributions] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const authenticated: string = sessionStorage.getItem("authenticatedUser");
  const username: string = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchUserContributions = async () => {
      dispatch(getContributions({ username, authenticated }))
        .then((res) => {
          if (res.payload) {
            setContributions(res.payload.length);
          } else {
            setContributions(0);
          }
        })
        .catch((err) => {
          return err === Error ? err?.message : null;
        });
    };

    dispatch(getAllContributions())
      .then((res) => {
        if (res.payload) {
          setAllContributions(res.payload.length);
        }
      })
      .catch((error) => {
        return error == Error ? error?.message : null;
      });

    fetchUserContributions();
  }, []);

  return (
    <div
      className={`flex p-3 contributions_container contribution-stats ${
        !hidden ? "contribution-stats-active" : ""
      }`}
    >
      <div className="contributions contributions_container flex justify-between w-full">
        {/* All Contributions */}
        <div className="p-4 stat-box shadow-xl">
          <p className="mb-1">Eco Contributions</p>
          <p className="flex items-center">
            <BiWorld className="stat-icon" />
            <span className="text-lg">{allContributions}</span>
          </p>
        </div>

        {/* Your Contributions */}
        <div className="p-4 stat-box shadow-xl mx-3">
          <p className="mb-1">Your Contributions</p>
          <p className="flex items-center">
            <FaUserAlt className="stat-icon user-icon" />
            <span className="text-lg">{contributions}</span>
          </p>
        </div>

        {/* Stars */}
        <div className="p-4 stat-box shadow-xl">
          <p className="mb-1">Eco Stars</p>
          <p className="flex items-center">
            <AiFillStar className="stat-icon" />
            <span className="text-lg">{contributions}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
