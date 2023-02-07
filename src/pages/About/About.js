import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./About.module.css";
import avatar from "../../images/vika.jpeg";

const About = () => {
  return (
    <>
      <Header />

      <div className={css.container}>
        <div className={css.grid}>
          <img className={css.ava} src={avatar} />
          <p className={css.p}>
            абки/теь гребу бабки/теперь гребу бабки/теперь гребу бабки/теперь
            гребу бабкиабки/теь гребу бабки/теперь гребу бабки/теперь гребу
            бабки/теперь гребу бабкиабки/теь гребу бабки/теперь гребу
            бабки/теперь гребу бабки/теперь гребу бабкиабки/теь гребу
            бабки/теперь гребу бабки/теперь гребу бабки/теперь гребу
            бабкиабки/теь гребу бабки/теперь гребу бабки/теперь гребу
            бабки/теперь гребу бабкиабки/теь гребу бабки/теперь гребу
            бабки/теперь гребу бабки/теперь гребу бабкиабки/теь гребу
            бабки/теперь гребу бабки/теперь гребу бабки/теперь гребу бабки
            бабкиабки/теь гребу бабки/теперь гребу бабки/теперь гребу
            бабки/теперь гребу бабкиабки/теь гребу бабки/теперь гребу
            бабки/теперь гребу бабки/теперь гребу бабкиабки/теь гребу
            бабки/теперь гребу бабки/теперь гребу бабки/теперь гребу бабки
          </p>
          <h1 className={css.h1}>Привет меня зовут Вика</h1>

          <a className={css.links} href="http://wa.me/77007878095">
            whatsApp
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
