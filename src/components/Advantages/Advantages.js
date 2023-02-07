import css from "./Advantages.module.css";
import dollar from '../../images/dollar_2.svg'
import truck from '../../images/truck-delivery.svg'
import boxes from '../../images/boxes.svg'

const Advantages = () => {
  return (
    <div className={css.main}>
    <div className={css.wrapper}>

<h2 className={css.h2} >Перевозка грузов в любые города России и Казахстана</h2>
<p className={css.p}>Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/Тут будет какой-то текст/
</p>
<h3 className={css.h3}>Преимущества транспортной компании</h3>


<div className={css.flex}>

<div className={css.item}>
    <img src={dollar} className={css.img} />
    <h3 className={css.h4}>Экономия</h3>
    <p className={css.p}>У нас доступные цены на городские и международные перевозки.</p>
</div>

<div className={css.item}>
    <img src={truck} className={css.img} />
    <h3 className={css.h4}>Планирование</h3>
    <p className={css.p}>Своевременная перевозка самым удобным транспортом в любые города России.</p>
</div>

<div className={css.item}>
    <img src={boxes} className={css.img} />
    <h3 className={css.h4}>Контроль</h3>
    <p className={css.p}>Точная информация по перевозке вашего груза у личного менеджера.</p>
</div>
  
</div>


</div>
    </div>
  );
};

export default Advantages;
