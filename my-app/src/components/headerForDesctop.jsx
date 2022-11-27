import React, { useState } from "react";
import data from "../source/planetsData";
import { Link } from "react-router-dom";

const HeaderForDesctop = ({ color, contentChange }) => {
  const [activeContent, setActiveContent] = useState();

  const activeContentHandler = (e) => {
    setActiveContent(e.target.id);
    contentChange(e.target.id);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-[28px] font-antonio mt-[32px]">
        THE PLANETS
      </h1>
      <div className="text-white text-[15px] font-spartan  tracking-[1px] uppercase flex justify-evenly mt-[39px] ">
        {data.map((item) => (
          <Link
            to={`../${item.name}`}
            id={item.name}
            onClick={activeContentHandler}
            className={
              "font-bold font-spartan tracking-[1px] border-b-4 pb-[20px] mx-[15px]  " +
              (activeContent === item.name
                ? "text-white  " + "border-[" + color + "] "
                : "opacity-50 border-transparent")
            }
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderForDesctop;
