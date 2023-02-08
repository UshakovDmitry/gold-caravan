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

// <div className={css.container}>
// <div className={css.grid}>
//   <img className={css.ava} src={avatar} />
//   <p className={css.p}>
//     Уважаемые клиенты, Я с гордостью представляю вам нашу логистическую
//     компанию, специализирующуюся на транспортировке между Россией и
//     Казахстаном. С годами опыта и приверженностью к эксклюзивности, мы
//     зарекомендовали себя как стабильный и надежный игрок на рынке. Наша
//     команда профессионалов неустанно работает, чтобы гарантировать, что
//     каждый груз прибудет в указанный термин и в идеальном состоянии. Мы
//     понимаем важность своевременной доставки и прилагаем все усилия,
//     чтобы гарантировать, что каждый груз будет обрабатываться с
//     наибольшей заботой и вниманием к деталям. Наш транспортный флот,
//     оснащенный самыми современными технологиями, гарантирует безопасную
//     и эффективную доставку
//   </p>
//   <h1 className={css.h1}>Привет меня зовут Вика</h1>

//   <a className={css.links} href="http://wa.me/77007878095">
//     whatsApp
//   </a>
// </div>
// </div>
