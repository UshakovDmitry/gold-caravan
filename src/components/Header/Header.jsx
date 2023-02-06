import React from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai';


const Header = () => {

  const [nav, setNav] = React.useState(false)


  return (
    <div className={css.header}>
      <div className={css.header__wrapper}>
        <h1 className={css.h1}>Gold Caravan </h1>





        <ul className={nav ? [css.menu, css.active].join(' ') : [css.menu]}>
          <Link to="/" className={css.link}>
            ГЛАВНАЯ
          </Link>
          <Link to="/reviews" className={css.link}>
            ОТЗЫВЫ
          </Link>
          <Link to="/drivers" className={css.link}>
            ВОДИТЕЛИ
          </Link>
          <Link to="/about" className={css.link}>
            О НАС
          </Link>
        </ul>





        <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
          {nav ? <AiOutlineClose size={40} /> :  <AiOutlineMenu size={40}/>} 
         
        </div>

        {/* <button className={css.header__button}>Оставить заявку</button> */}
      </div>
    </div>
  );
};

export default Header;
