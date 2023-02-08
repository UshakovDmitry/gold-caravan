import css from "./Company.module.css";
import truck__1 from '../../images/main_img_1.jpg'
import truck__2 from '../../images/main_img2.jpg'

const Company = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.text}>
            <div className={css.border}></div>
            <h2 className={css.h2}>О компании</h2>
            <p className={css.p}>
              {" "}
              Что-то про компанию/Что-то про компанию/Что-то про компанию/Что-то
              про компаниюЧто-то про компаниюЧто-то про компаниюЧто-то про
              компанию/Что-то про компаниюЧто-то про компанию/Что-то про
              компанию/Что-то про компанию/Что-то про компанию/Что-то про
              компаниюЧто-то про компаниюм/Что-то про компанию
            </p>
          </div>

          <div className={css.midle}></div>

          <div className={css.grid}>
            <div className={css.item_color}>
                <h3 className={css.h3}>571</h3>
                <h4 className={css.h4}>заказ</h4>
                <h5 className={css.h5}>между странами</h5>
            </div>
            <div className={css.item_color}>
            <h3 className={css.h3}>127</h3>
                <h4 className={css.h4}>грузовиков</h4>
                <h5 className={css.h5}>разный видов</h5>
            </div>
            <div className={css.item}>
                <img className={css.img__inside} src ={truck__1} />
            </div>
            <div className={css.item}>
            <img className={css.img__inside} src ={truck__2} />
            </div>
            <div className={css.item_color}>
            <h3 className={css.h3}>61</h3>
                <h4 className={css.h4}>водитель</h4>
                <h5 className={css.h5}>профессионал</h5>
            </div>
            <div className={css.last_item}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
