import React from "react";
import sandwich from "./../assets/icon-hamburger.svg";
import { useDispatch } from "react-redux";
import { planetActions } from './../store/planet-redux';

const Header = () => {
  const dispatch = useDispatch()

  const sandwichButtonHandler =() => {
    dispatch(planetActions.planetListHandler())
  }
  return (
    <>
      <header className="flex justify-between pb-[17px] items-center">
        <h1 className="text-white font-antonio text-[28px]">THE PLANETS</h1>
        <button onClick={sandwichButtonHandler}>
          <img className="h-[17px] " src={sandwich} />
        </button>
      </header>
      <div className=" h-[1px] bg-white opacity-20 stroke "></div>
    </>
  );
};

export default Header;
