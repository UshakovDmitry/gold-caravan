import logo from '../images/logo.svg'
import css from "./FirstLine.module.css";

const FirstLine = () => {
  return (
    <>
      <div className={css.line}>

      <div className={css.wrapper}>



<div className={css.logo}>
  <img className={css.svg} src={logo} />
  <h1>Логистическая компания Gold Caravan</h1>
</div>






<div className={css.number}>
<a href="tel:+77071608200" className={css.phone_number}>+7(707)160-82-00</a>
</div>



<div className={css.contact}>social message</div>

</div>


      </div>
    </>
  );
};

export default FirstLine;
