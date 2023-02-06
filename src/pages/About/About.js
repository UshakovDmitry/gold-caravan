import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./About.module.css";
import avatar from "../../images/avatar.jpeg";

const About = () => {
  return (
    <>
      <Header />

      <div className={css.container}>
        <div className={css.wrapper}>
          <img className={css.img} src={avatar} />
          <p className={css.p}>Привет меня зовут Вика, я создала эту контору и теперь гребу бабки </p>
          <a className={css.link} href="http://wa.me/77007878095">
            whatsApp
          </a>
          <p className={css.about}></p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
