import Header from "./components/header";
import PlanetsList from "./components/planetsList";
import PlanetPage from "./components/planetPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="box-border pt-[14px] px-[24px]">
      <Routes>
        <Route path="/" element={<PlanetsList />} />
        <Route path="/:planet" element={<PlanetPage />} />
      </Routes>
    </div>
  );
}

export default App;
