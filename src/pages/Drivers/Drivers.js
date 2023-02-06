import bg_img from "../../images/bg__Drivers.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./Drivers.module.css";
import driver_1 from "../../images/driver_1.jpg";
import driver_2 from "../../images/driver_2.jpg";
import driver_3 from "../../images/driver_3.jpg";
import CardDriver from "../../components/CardDriver/CardDriver";
import Carousel from "../../components/Carousel/Carousel";

const Drivers = () => {
  return (
    <>
      <Header />
      <div
        className={css.main}
        style={{ backgroundImage: `url(${bg_img})`, backgroundSize: "cover" }}
      >
        <Carousel
          chidren={
            <> 
              <CardDriver ava={driver_1} />
              <CardDriver ava={driver_2} />
              <CardDriver ava={driver_3} />
            </>
          }
        />
      </div>
      <Footer />
    </>
  ); 
};

export default Drivers;
