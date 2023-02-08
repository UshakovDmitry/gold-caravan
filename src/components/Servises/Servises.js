import css from "./Servises.module.css";
import icon__1 from '../../images/Servises__1.png';
import icon__2 from '../../images/Servises__2.png';
import icon__3 from '../../images/Servises__3.png';
import icon__4 from '../../images/Servises__4.png';
import icon__5 from '../../images/Servises__5.png';
import icon__6 from '../../images/Servises__6.png';
import icon__7 from '../../images/Servises__7.png';
import icon__8 from '../../images/Servises__8.png';

const Servises = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.border}></div>
        <h2 className={css.h2}>Мы предлагаем</h2>
        <div className={css.grid}>

          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__1}></img>
            </div>
            
            <h4 className={css.h4}>Автомобильные перевозки</h4>
          </div>

          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__2}></img>
            </div>
            <h4 className={css.h4}>Международные перевозки</h4>
          </div>

          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__3}></img>
            </div>
            <h4 className={css.h4}>Перевозка негабаритных грузов</h4>
          </div>

          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__4}></img>
            </div>
            <h4 className={css.h4}>Сборные грузы</h4>
          </div>

          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__5}></img>
            </div>
            <h4 className={css.h4}>Контрактные перевозки</h4>
          </div>
          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__6}></img>
            </div>
            <h4 className={css.h4}>Страхование грузов</h4>
          </div>
          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__7}></img>
            </div>
            <h4 className={css.h4}>Перевозка опасных грузов</h4>
          </div>
          <div className={css.item}>
            <div className={css.around}>
            <img className={css.icon} src={icon__8}></img>
            </div>
            <h4 className={css.h4}>Надежность</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servises;
