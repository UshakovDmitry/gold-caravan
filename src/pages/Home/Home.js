import Header from "../../components/Header/Header";
import Lending from "../../components/Lending/Lending";
import FirstLine from "../../components/FiirstLine/FirstLine";
import Advantages from "../../components/Advantages/Advantages";
import Main from "../../components/Main/Main";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import Servises from "../../components/Servises/Servises";
import Company from "../../components/Company/Company";
// import css from './Drivers.module.css'

const Drivers = () => {
  return (
    <>
      <FirstLine />
      <Header />
      <Lending />
      <Advantages />
      <Servises />
      <Company />
      <Main />
      <Map />
      <Footer />
    </>
  );
};

export default Drivers;
