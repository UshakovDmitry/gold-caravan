import bg_img from "../../images/bg__Drivers.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./Drivers.module.css";
import driver_1 from "../../images/driver_1.jpg";
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
      <Carousel>
       <CardDriver ava={driver_1}/>







      </Carousel>
        














      </div>
      <Footer />
    </>
  );
};

export default Drivers;

{
  /* <div className={css.grid_layout}>
          <img className={css.ava} src={driver_1} />
          <h2 className={css.name}>Привет, меня зовут Дмитрий</h2>
          <p className={css.quote}>
            Работаю как водитель в компании
            Gold Caravan. Я с удовольствием работаю здесь уже 22 года,
            гарантируя безопасную и эффективную доставку каждого груза. Для меня
            важно следовать этическим принципам в работе и жизни, включая
            уважение к клиентам и окружающей среде. Я стремлюсь сделать каждую
            доставку как можно быстрее и безопаснее, чтобы наши клиенты были
            довольны результатом.
          </p>
        </div> */
}
