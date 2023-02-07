import bg_img from "../../images/bg_drivers.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Drivers.module.css";
import kazah from '../../images/kazah_driver.jpeg'
import kazah_3 from '../../images/kazah_driver_3.jpeg'
import kazah_2 from '../../images/kazah_driver_2.jpeg'
// import driver_1 from "../../images/driver_1.jpg";
// import driver_2 from "../../images/driver_2.jpg";
// import driver_3 from "../../images/driver_3.jpg";
// import CardDriver from "../../components/CardDriver/CardDriver";
import Carousel from "../../components/Carousel/Carousel";
import css from "../../components/CardDriver/CardDriver.module.css";

const Drivers = () => {
  return (
    <>
      <Header />
      <div
        className={style.main}
        style={{ backgroundImage: `url(${bg_img})`, backgroundSize: "cover" }}
      >
      <h1 className={style.h1}>Мы предоставляем ЛУЧШИХ водителей</h1>
        <Carousel>
 



           <div className={css.grid_layout}>
            <img className={css.ava} src={kazah} />
            <h2 className={css.name}>Привет, меня зовут Ержан</h2>
            <p className={css.quote}>
            «Алтын керуен» серіктестігінде жүргізуші болып жұмыс істеймін. Мен қуана-қуана
               Мен мұнда 22 жыл жұмыс істеп келемін, қауіпсіз және тиімділікке кепілдік бердім
               әрбір жөнелтілімді жеткізу. Мен үшін этикалық нормаларды сақтау маңызды
               жұмыс пен өмірдегі принциптер, соның ішінде клиенттерді құрметтеу және
               қоршаған орта. Мен әрбір жеткізуді мүмкіндігінше жақсы етуге тырысамын.
               тұтынушыларымызды қуанту үшін жылдамырақ және қауіпсіз
               нәтиже.
            </p>
          </div>
          <div className={css.grid_layout}>
            <img className={css.ava} src={kazah_2} />
            <h2 className={css.name}>Привет, меня зовут Газиз</h2>
            <p className={css.quote}>
            «Алтын керуен» серіктестігінде жүргізуші болып жұмыс істеймін. Мен қуана-қуана
               Мен мұнда 22 жыл жұмыс істеп келемін, қауіпсіз және тиімділікке кепілдік бердім
               әрбір жөнелтілімді жеткізу. Мен үшін этикалық нормаларды сақтау маңызды
               жұмыс пен өмірдегі принциптер, соның ішінде клиенттерді құрметтеу және
               қоршаған орта. Мен әрбір жеткізуді мүмкіндігінше жақсы етуге тырысамын.
               тұтынушыларымызды қуанту үшін жылдамырақ және қауіпсіз
               нәтиже.
            </p>
          </div>
          <div className={css.grid_layout}>
            <img className={css.ava} src={kazah_3} />
            <h2 className={css.name}>Привет, меня зовут Нурсултан</h2>
            <p className={css.quote}>
            «Алтын керуен» серіктестігінде жүргізуші болып жұмыс істеймін. Мен қуана-қуана
               Мен мұнда 22 жыл жұмыс істеп келемін, қауіпсіз және тиімділікке кепілдік бердім
               әрбір жөнелтілімді жеткізу. Мен үшін этикалық нормаларды сақтау маңызды
               жұмыс пен өмірдегі принциптер, соның ішінде клиенттерді құрметтеу және
               қоршаған орта. Мен әрбір жеткізуді мүмкіндігінше жақсы етуге тырысамын.
               тұтынушыларымызды қуанту үшін жылдамырақ және қауіпсіз
               нәтиже..
            </p>
          </div> 
        </Carousel>
      </div>

      <Footer />
    </>
  );
};

export default Drivers;

{
  /* // children={
          //   <> 
          //     <CardDriver ava={driver_1} />
          //     <CardDriver ava={driver_2} />
          //     <CardDriver ava={driver_3} />
          //   </>
          // }
        />
      </div> */
}
