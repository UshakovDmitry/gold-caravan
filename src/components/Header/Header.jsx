import { Link } from 'react-router-dom';
import css from './header.module.css'


const Header = () => {

  return (
    <div className={css.header} >
    
    <div className={css.header__wrapper}>

    <h1 className={css.h1}>Gold Caravan </h1>

     <ul className={css.header__links}>
        
        <Link to="reviews" className={css.link}>ОТЗЫВЫ</Link>
        <Link to="drivers" className={css.link}>ВОДИТЕЛИ</Link>
        <Link to="about" className={css.link}>О НАС</Link>
     </ul>
    
     <button className={css.header__button} >Оставить заявку</button>
    </div>
    </div>
        )
}

export default Header;