import React from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import phone from '../../images/phone_call.svg'

const setActive = ({ isActive }) =>
  isActive ? `${css.active_link}` : `${css.link}`;
const Header = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <>
      <div className={css.header}>
        <div className={css.header__wrapper}>
          <Link to="/" className={css.h1}>
            Gold Caravan{" "}
          </Link>

          <ul className={nav ? [css.menu, css.active].join(" ") : [css.menu]}>
            <NavLink to="/" className={setActive}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to="/reviews" className={setActive}>
              ОТЗЫВЫ
            </NavLink>
            <NavLink to="/drivers" className={setActive}>
              ВОДИТЕЛИ
            </NavLink>
            <NavLink to="/about" className={setActive}>
              О КОМПАНИИ
            </NavLink>
          </ul>
               <button className={css.header__button}>
        <img className={css.icon} src={phone}/>
        <p className={css.p}>Позвонить</p>
        </button>
        </div>
   
      </div>

      <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
    </>
  );
};

export default Header;
