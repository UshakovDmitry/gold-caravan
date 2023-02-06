import css from "./CardDriver.module.css";

const CardDriver = (props) => {
  return (
    <>
      <div className={css.grid_layout}>
        <img className={css.ava} src={props.ava} />
        <h2 className={css.name}>Привет, меня зовут Дмитрий</h2>
        <p className={css.quote}>
          Работаю как водитель в компании Gold Caravan. Я с удовольствием
          работаю здесь уже 22 года, гарантируя безопасную и эффективную
          доставку каждого груза. Для меня важно следовать этическим принципам в
          работе и жизни, включая уважение к клиентам и окружающей среде. Я
          стремлюсь сделать каждую доставку как можно быстрее и безопаснее,
          чтобы наши клиенты были довольны результатом.
        </p>
      </div>
    </>
  );
};

export default CardDriver;
