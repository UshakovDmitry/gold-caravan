// import mainImg from "./images/main-img.png"
import mainImg2 from "./images/truck.svg"
// import mainImg3 from "./images/highway-1666635.jpg"
// import mainImg4 from "./images/pexels-photoscom-93398.jpg"

import './App.css'
import Header from './Header/Header.jsx'

function App() {
  return (
    <>
      <div className="page">
      <Header />
      <div className="lending">
      <img className="main__img" src={mainImg2} alt="Логотип" />
      </div>
      <div className="main">
      

      {/* <img className="main__img" src={mainImg} alt="Логотип" /> */}
      {/* <img className="main__img" src={mainImg2} alt="Логотип" /> */}
      {/* <img className="main__img" src={mainImg3} alt="Логотип" /> */}
      {/* <img className="main__img" src={mainImg4} alt="Логотип" /> */}
      </div>

      </div>
    
    
     
    </>
  );
}

export default App;
