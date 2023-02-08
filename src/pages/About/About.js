import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./About.module.css";
import founders from "../../images/founders.jpeg";
import avatar from "../../images/vika.jpeg";

const About = () => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <div className={css.founders}>
          <img className={css.img} src={founders}></img>
          <div className={css.text}>
            <h1 className={css.h1}>Наша команда менеджеров</h1>
            <p className={css.p}>
              Рады приветсвовать Вас в компании Gold Caravan Рады приветсвовать
              Вас в компании Gold Caravan Рады приветсвовать Вас в компании Gold
              Caravan Рады приветсвовать Вас в компании Gold Caravan Рады
              приветсвовать Вас в компании Gold Caravan Рады приветсвовать Вас в
              компании Gold Caravan Рады приветсвовать Вас в компании Gold
              Caravan Рады приветсвовать Вас в компании Gold Caravan Рады
              приветсвовать Вас в компании Gold Caravan vika    Caravan Рады приветсвовать Вас в компании Gold Caravan Рады
              приветсвовать Вас в компании Gold Caravan Рады приветсвовать Вас в
              компании Gold Caravan Рады приветсвовать Вас в компании Gold
              Caravan Рады приветсвовать Вас в компании Gold Caravan Рады
              приветсвовать Вас в компании Gold Caravan vika
            </p>
          </div>
          <div className={css.links}></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;


