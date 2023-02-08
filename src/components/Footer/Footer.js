import css from "./Footer.module.css";
import telega from "../../images/telegram.svg";
import insta from "../../images/instagram.svg";
import whatsApp from "../../images/whatsapp.svg";
// import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.grid}>
        <h1 className={css.h1}>Gold Caravan</h1>

        <div className={css.list}>
        <h2 className={css.contacts}>Контакты:</h2>
          <a href="+77007878095" className={css.numbers} >+77007878095</a>
          <a href="+77055903365" className={css.numbers} >+77055903365</a>
        </div>

        <div className={css.links}>
          <div>
            <a href="http://wa.me/77007878095" className={css.phone_number}>
              <img className={css.svg} src={whatsApp} />
            </a>
          </div>

          <div>
            <a href="tel:+77071608200" className={css.phone_number}>
              <img className={css.svg} src={telega} />
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/victoria_eroffff/"
              className={css.phone_number}
            >
              <img className={css.svg} src={insta} />
            </a>
          </div>
        </div>

        <div className={css.developer}>
        <p className={css.p}>Разработка сайта</p>
          <a href="https://img.shields.io/badge/-Telegram-203448" className={css.telega}>Ushakov Dmitry</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

<div className={css.contact}>
  <div>
    <a href="http://wa.me/77007878095" className={css.phone_number}>
      <img className={css.svg} src={whatsApp} />
    </a>
  </div>

  <div>
    <a href="tel:+77071608200" className={css.phone_number}>
      <img className={css.svg} src={telega} />
    </a>
  </div>

  <div>
    <a
      href="https://www.instagram.com/victoria_eroffff/"
      className={css.phone_number}
    >
      <img className={css.svg} src={insta} />
    </a>
  </div>
</div>;
