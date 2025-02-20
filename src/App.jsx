import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import CartCompare from "./ProjectPages/CartCompare/CartCompare";
import CycleSync from "./ProjectPages/CycleSync/CycleSync";
import Farkle from "./ProjectPages/Farkle/Farkle";
import Gridddle from "./ProjectPages/Gridddle/Gridddle";
import Hangman from "./ProjectPages/Hangman/Hangman";
import HoleInOne from "./ProjectPages/Hole-In-One/Hole";
import HomeCooked from "./ProjectPages/HomeCooked/HomeCooked";
import Jaipur from "./ProjectPages/Jaipur/Jaipur";
import LastMeals from "./ProjectPages/Last Meals/LastMeals";
import Mappi from "./ProjectPages/Mappi/Mappi";
import Markit from "./ProjectPages/Markit/Markit";
import Riverflow from "./ProjectPages/NE_RiverFlow/RiverFlow";
import Pomodoro from "./ProjectPages/Pomodoro/Pomodoro";
import PupProgress from "./ProjectPages/PupProgress/PupProgress";
import Think from "./ProjectPages/Think/Think.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/think" element={<Think />} />
          <Route path="/pup-progress" element={<PupProgress />} />
          <Route path="/home-cooked" element={<HomeCooked />} />
          <Route path="/mappi" element={<Mappi />} />
          <Route path="/riverflow" element={<Riverflow />} />
          <Route path="/cycle-sync" element={<CycleSync />} />
          <Route path="/gridddle" element={<Gridddle />} />
          <Route path="/last-meals" element={<LastMeals />} />
          <Route path="/farkle" element={<Farkle />} />
          <Route path="/markit" element={<Markit />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/cart-compare" element={<CartCompare />} />
          <Route path="/hole-in-one" element={<HoleInOne />} />
          <Route path="/hangman" element={<Hangman />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
