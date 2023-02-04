// import mainImg from "./images/main-img.png"

// import mainImg3 from "./images/highway-1666635.jpg"
// import mainImg4 from "./images/pexels-photoscom-93398.jpg"

import "./App.css";
import Header from "./Header/Header.jsx";
import Lending from "./Lending/Lending";
import FirstLine from "./FiirstLine/FirstLine";
import Main from "./Main/Main";
import Map from './Map/Map'

function App() {
  return (
    <>
      <div className="page">
        <FirstLine />
        <Header />
        <Lending />
        <Main />
        <Map />
      </div>
    </>
  );
}

export default App;
