import mainImg from "./images/main-img.png"
import './App.css'
import Header from './Header/Header.jsx'

function App() {
  return (
    <>
      <div className="page">
      <div className="main">
      <Header />

      <img className="main__img" src={mainImg} alt="Логотип" />
      </div>

      </div>
    
    
     
    </>
  );
}

export default App;
