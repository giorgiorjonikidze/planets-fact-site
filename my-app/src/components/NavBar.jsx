import React from "react";
import { useState } from "react";
import data from "./../source/planetsData";

const NavBar = ({color, contentChange}) => {
  const [activeContent, setActiveContent] = useState("overview");

  const activeContentHandler = (e) => {
    setActiveContent(e.target.id);
    contentChange(e.target.id)
  };
  return (
    <div className="flex justify-evenly mt-[20px]  " >
      <div>
        <p
        id="overview"
          onClick={activeContentHandler}
          className={
            "font-bold font-spartan tracking-[2px] border-b-4 pb-[20px]  " +
            (activeContent === "overview"
              ? ("text-white  " + "border-[" + color + "] ")
              : "opacity-50 border-transparent")
          }
        >
          OVERVIEW
        </p>
      </div>
      <div>
        <p
        id="structure"
          onClick={activeContentHandler}
          className={
            "font-bold font-spartan tracking-[2px] border-b-4 pb-[20px] " +
            (activeContent === "structure"
              ? ("text-white  " + "border-[" + color + "] ")
              : "opacity-50 border-transparent")
          }
        >
          STRUCTURE
        </p>
      </div>
      <div>
        <p
        id="geology"
          onClick={activeContentHandler}
          className={
            "font-bold font-spartan tracking-[2px] border-b-4 pb-[20px] " +
            (activeContent === "geology"
              ? ("text-white  " + "border-[" + color + "] ")
              : "opacity-50 border-transparent")
          }
        >
          SURFASE{" "}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
