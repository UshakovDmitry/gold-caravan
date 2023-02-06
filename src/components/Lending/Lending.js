import mainImg2 from '../../images/truck.svg'
import css from  './Lending.module.css'


const Lending = () => {

  return (
  
<>
    <div className={css.lending} style={{backgroundImage: `url(${mainImg2})`, backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>

    <div className={css.container}>
      <h1 className={css.h1}>ГРУЗОВЫЕ ПЕРЕВОЗКИ</h1>
      <p className={css.p}>Перевозка крупногабаритных грузов по России и Казахстану. Полное экспедирование, страхование, упаковка и хранение грузов</p>
    </div>
    
    </div>

 
    </>
        )
}

export default Lending;