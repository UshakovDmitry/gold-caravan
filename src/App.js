import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header.jsx";
// import Lending from "./components/Lending/Lending";
// import FirstLine from "./components/FiirstLine/FirstLine";
// import Advantages from "./components/Advantages/Advantages";
// import Main from "./components/Main/Main";
// import Map from "./components/Map/Map";
// import Footer from "./components/Footer/Footer";

import Layout from "./Layout/Layout";
import Reviews from "./pages/Reviews/Reviews";
import Drivers from "./pages/Drivers/Drivers";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>

        {/* <FirstLine />
        <Header />
        <Lending />
        <Advantages />
        <Main />
        <Map />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
