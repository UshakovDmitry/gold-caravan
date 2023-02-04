
import css from './header.module.css'


const Header = () => {

  return (
    <div className={css.header} >
    
    <div className={css.header__wrapper}>

    <h1 className={css.h1}>Gold Caravan </h1>

     <ul className={css.header__links}>
        
        <li className={css.link}>ОТЗЫВЫ</li>
        <li className={css.link}>ЦЕНЫ</li>
        <li className={css.link}>ВОДИТЕЛИ</li>
        <li className={css.link}>О НАС</li>
     </ul>
    
     <button className={css.header__button} >Оставить заявку</button>
    </div>
    </div>
        )
}

export default Header;