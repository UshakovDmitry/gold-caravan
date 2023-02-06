import css from "./Carousel.module.css";

const Carousel = ({ chidren }) => {
  return (



    <div className={css.container}>

      <div className={css.window}>
       

        <div className={css.pages}>

         {chidren}
         
         </div>

      </div>

    </div>

  );
};

export default Carousel;
