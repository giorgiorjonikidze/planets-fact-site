import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetActions } from "./../store/planet-redux";
import data from "./../source/planetsData";

const NavBar = () => {
  const [activeContent, setActiveContent] = useState("overview");
  const planetIndex = useSelector((state) => state.planetNumber)
  const contentTitle = useSelector((state) => state.contentTitle)

  const dispatch = useDispatch();

  const overviewHandler = () => {
    dispatch(planetActions.contentOverview());
  };
  const structureHandler = () => {
    dispatch(planetActions.contentStrucute());
  };
  const surfaceHandler = () => {
    dispatch(planetActions.contentSurface());
  };
  return (
    <div className="flex justify-between mt-[20px]  ">
      <div>
        <button
          id="overview"
          onClick={overviewHandler}
          style={contentTitle  === "overview" ?  {borderColor: data[planetIndex].color} : {}}
          className={
            "font-spartan tracking-[2px] border-b-4 pb-[20px] text-white  " +
            (contentTitle ===  "overview"
              ? "text-white  "
              : "opacity-50 border-transparent")
          }
        >
          OVERVIEW
        </button>
      </div>
      <div>
        <button
          id="structure"
          onClick={structureHandler}
          style={contentTitle  === "structure" ?  {borderColor: data[planetIndex].color} : {}}
          className={
            "font-spartan tracking-[2px] border-b-4 pb-[20px] text-white " +
            (contentTitle === "structure"
              ? "text-white  " + "border-[" + data[planetIndex].color + "] "
              : "opacity-50 border-transparent")
          }
        >
          STRUCTURE
        </button>
      </div>
      <div>
        <button
          id="geology"
          onClick={surfaceHandler}
          style={contentTitle  === "geology" ?  {borderColor: data[planetIndex].color} : {}}
          className={
            "font-spartan tracking-[2px] border-b-4 pb-[20px] text-white " +
            (contentTitle === "geology"
              ? "text-white  " + "border-[" + data[planetIndex].color + "] "
              : "opacity-50 border-transparent")
          }
        >
          SURFASE
        </button>
      </div>
    </div>
  );
};

export default NavBar;
