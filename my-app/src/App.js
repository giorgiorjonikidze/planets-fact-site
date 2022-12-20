import Header from "./components/header";
import PlanetsList from "./components/planetsList";
import PlanetPage from "./components/planetPage";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";

function App() {
  const showPlanetList = useSelector((state) => state.showPlanetList)
  return ( 
    <div className="box-border pt-[14px] px-[24px]">
      <Header />
      {/* <NavBar /> */}
      {showPlanetList && <PlanetsList />}
      {!showPlanetList && <PlanetPage />}
    </div>
  );
}

export default App;
