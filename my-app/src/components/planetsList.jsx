import React from "react";
import data from "./../source/planetsData";
import arrow from "./../assets/icon-chevron.svg";
import { Link } from "react-router-dom";
import Header from "./header";

const PlanetsList = (props) => {
  return (
    <div className="pb-16">
      <Header />
      {/* planets list  */}
      {data.map((item) => (
        <div key={item.name} className="mt-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                className={
                  "w-[20px] h-[20px] rounded-full mr-[25px] " +
                  "bg-[" +
                  item.color +
                  "]"
                }
              ></div>
              <Link
                to={item.name}
                className="text-white uppercase font-spartan font-bold tracking-[1.36px]"
              >
                {item.name}
              </Link>
            </div>
            <Link to={item.name}>
              <img src={arrow} className="h-[8px]" />
            </Link>
          </div>
          {item.name !== "Neptune" && (
            <div className="h-[1px] bg-white opacity-20 stroke mt-[25px]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlanetsList;
