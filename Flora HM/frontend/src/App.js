import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Home from "./Pages/Home.jsx";
import Database from "./Pages/Database.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Plant from "./Pages/Plant.jsx";
import MyGarden from "./Pages/MyGarden.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Monitor from "./Pages/Monitor.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/plant/:plantId" element={<Plant />} />
          <Route path="/mygarden" element={<MyGarden />} />
          <Route path="/monitor/:plantId" element={<Monitor />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
