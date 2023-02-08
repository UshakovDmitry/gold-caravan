import css from "./Company.module.css";

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
            <div className={css.item_color}></div>
            <div className={css.item_color}></div>
            <div className={css.item}>
                <img
            </div>
            <div className={css.item}></div>
            <div className={css.item_color}></div>
            <div className={css.last_item}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
