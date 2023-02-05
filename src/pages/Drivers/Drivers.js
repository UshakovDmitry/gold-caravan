
import bg_img from '../../images/bg__Drivers.jpg'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Drivers.module.css';
import CardDriver from '../../components/CardDriver/CardDriver';

const Drivers = () => {
    return (
      <>
      <Header />
         <div className={css.main} style={
          {backgroundImage: `url(${bg_img})`, backgroundSize:"cover"}

         }>
         <div className={css.wrapper}>
         <CardDriver />
         <CardDriver />
         <CardDriver />
         <CardDriver />
         <CardDriver />
         <CardDriver /> 
         {/* <div className={css.card}></div>
         <div className={css.card}></div>
         <div className={css.card}></div>
         <div className={css.card}></div>
         <div className={css.card}></div>
         <div className={css.card}></div> */}
         


         </div>


         </div>
      <Footer />
     
      </>
    );
  };
  
  export default Drivers;