import React from "react";
import sandwich from "./../assets/icon-hamburger.svg";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="flex justify-between pb-[17px] items-center">
        <h1 className="text-white font-antonio text-[28px]">THE PLANETS</h1>
        <Link to="/">
          <img className="h-[17px] " src={sandwich} />
        </Link>
      </header>
      <div className=" h-[1px] bg-white opacity-20 stroke "></div>
    </>
  );
};

export default Header;
