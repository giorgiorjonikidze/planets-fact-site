import React from "react";
import data from "./../source/planetsData";
import arrow from "./../assets/icon-chevron.svg";
import { Link } from "react-router-dom";
import Header from "./header";
import { useDispatch } from "react-redux";
import { planetActions } from "../store/planet-redux";

const PlanetsList = (props) => {
  const dispatch = useDispatch()
  const planetHandler = (index) => {
    dispatch(planetActions.planetChanger(index))
    dispatch(planetActions.planetListHandler())
  }
  return (
    <div className="pb-16">
      {/* planets list  */}
      {data.map((item, index) => (
        <div key={item.name} className="mt-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                style={{backgroundColor: item.color}}
                className={
                  "w-[20px] h-[20px] rounded-full mr-[25px] "
                }
              ></div>
              <button
                onClick={()=>planetHandler(index)}
                className="text-white uppercase font-spartan font-bold tracking-[1.36px]"
              >
                {item.name}
              </button>
            </div>
            <button onClick={()=>planetHandler(index)}>
              <img src={arrow} className="h-[8px]" />
            </button>
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
