import React from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai';

const setActive = ({isActive}) => isActive ? `${css.active_link}` : `${css.link}`;
const Header = () => {

  const [nav, setNav] = React.useState(false);




  return (
    <div className={css.header}>
      <div className={css.header__wrapper}>
        <h1 className={css.h1}>Gold Caravan </h1>





        <ul className={nav ? [css.menu, css.active].join(' ') : [css.menu]}>
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
        <div className={css.animation}></div>





        <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
          {nav ? <AiOutlineClose size={40} /> :  <AiOutlineMenu size={40}/>} 
         
        </div>

        {/* <button className={css.header__button}>Оставить заявку</button> */}
      </div>
    </div>
  );
};

export default Header;
