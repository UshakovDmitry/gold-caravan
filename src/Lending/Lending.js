import mainImg2 from '../images/truck.svg'
import css from  './Lending.module.css'


const Lending = () => {

  return (
  
<>
    <div className={css.lending} style={{backgroundImage: `URL(${mainImg2})` }}>

    <div className={css.lending__text}>
      <h1 className={css.lending_h1}>ГРУЗОВЫЕ ПЕРЕВОЗКИ</h1>
      <p className={css.lending_p}>Перевозка крупногабаритных грузов по России и Казахстану. Полное экспедирование, страхование, упаковка и хранение грузов</p>
    </div>
    
    </div>

 
    </>
        )
}

export default Lending;