import css from "./Footer.module.css";
// import telega from "../../images/telegram.svg";
// import insta from "../../images/instagram.svg";
// import whatsApp from "../../images/whatsapp.svg";
import logo from "../../images/logo.svg";


const Footer = () => {
  return (
    <div className={css.footer}>
        <div className={css.wrapper}>
          <div className={css.logo}>
            <img className={css.svg} src={logo} />
            <h1>Логистическая компания Gold Caravan</h1>
          </div>

          <div className={css.number}>
            <a href="tel:+77071608200" className={css.phone_number}>
              +7(707)160-82-00
            </a>
          </div>

          {/* <div className={css.contact}>
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
          </div> */}
        </div>
    </div>
  );
};

export default Footer;
