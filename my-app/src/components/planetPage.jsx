import React from "react";
import data from "../source/planetsData";
import NavBar from "./NavBar";
import sourceImg from "./../assets/icon-source.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import HeaderForDesctop from "./headerForDesctop";


const PlanetPage = (props) => {
  const [activeContent, setActiveContent] = useState("overview");

  const activeContentHandler = (content) => {
    setActiveContent(content);
  };

  const params = useParams();

  const planetFinder = () => {
    const planet = data[data.findIndex((item) => item.name === params.planet)];
    return planet;
  };

  const planet = planetFinder();

  const contentType = () => {
    if (activeContent === "overview") {
      return;
    }
  };

  const planetChangeHandler = (planet) => {
    
  }

  
  return (
    <div className="text-white mb-[47px]">
      {/* header  ///////////////////////////////*/}
      <HeaderForDesctop color={planet.color} planetChange={planetChangeHandler} />
      {/* <Header /> */}
      {/* <NavBar color={planet.color} contentChange={activeContentHandler} /> */}
      <div className="stroke h-[1px] bg-white opacity-20 stroke "></div>
      {/* image /////////////////////////////// */}
      <div className="flex flex-col items-center">
        <div className="h-[304px] flex items-center justify-center relative">
          <img
            className="w-[224px] "
            src={
              activeContent === "overview"
                ? process.env.PUBLIC_URL + planet.images.planet
                : process.env.PUBLIC_URL + planet.images.internal
            }
            alt="asev"
          />
          {activeContent === "geology" && (
            <img
              className="w-[70px] absolute bottom-6"
              src={process.env.PUBLIC_URL + planet.images.geology}
            />
          )}
        </div>
        <h1 className="text-[40px] font-antonio mb-4">{planet.name}</h1>
        <p className="font-spartan text-center text-[14px] leading-[24px] opacity-50 mb-[32px]">
          {planet[activeContent].content}
        </p>
        <div className="mb-[28px] opacity-50 font-spartan">
          <span className="font-light">Source : </span>
          <a className="" href={planet[activeContent].source}>
            Wikipedia{" "}
            <span>
              <img className="inline-block" src={sourceImg} alt="" />
            </span>{" "}
          </a>
        </div>
        {/* data block /////////////////  */}
        <div className="flex flex-col">
          <div className="flex justify-between min-w-[327px] border-solid border-[1px] box-border px-[24px] h-[51px] items-center mb-2 border-opacity-20 border-white ">
            <p className="text-[11px] font-spartan font-bold tracking-[0.73px] opacity-50">
              ROTATION TIME
            </p>
            <p className="font-antonio text-[20px]">{planet.rotation}</p>
          </div>
          <div className="flex justify-between min-w-[327px] border-solid border-[1px] box-border px-[24px] h-[51px] items-center mb-2 border-opacity-20 border-white">
            <p className="text-[11px] font-spartan font-bold tracking-[0.73px] opacity-50">
              REVOLUTION TIME
            </p>
            <p className="font-antonio text-[20px]">{planet.revolution}</p>
          </div>
          <div className="flex justify-between min-w-[327px] border-solid border-[1px] box-border px-[24px] h-[51px] items-center mb-2 border-opacity-20 border-white">
            <p className="text-[11px] font-spartan font-bold tracking-[0.73px] opacity-50">
              radius
            </p>
            <p className="font-antonio text-[20px]">{planet.radius}</p>
          </div>
          <div className="flex justify-between min-w-[327px] border-solid border-[1px] box-border px-[24px] h-[51px] items-center mb-2 border-opacity-20 border-white">
            <p className="text-[11px] font-spartan font-bold tracking-[0.73px] opacity-50">
              AVERAGE TEMP.
            </p>
            <p className="font-antonio text-[20px]">{planet.temperature}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPage;
