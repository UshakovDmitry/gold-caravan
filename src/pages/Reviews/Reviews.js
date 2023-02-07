import css from "./Reviews.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Review from "../../components/Review/Review";

const Reviews = () => {
  return (
    <>
      <Header />
      <div className={css.main}>
        <div className={css.wrapper}>
          <h2 className={css.h2}>Отзывы о нас</h2>

          <div className={css.grid}>
            <Review
              name="Оксана"
              city="Алматы"
              text="Компания супер! Вика очень приятная, все отвезла в срок!
              Выделили газель под мои гитары. Дали мне своего менеджера! 
              Присылали мне фотки о том как его везут. Мне все понрав. Рекомендую!"
              date="12.02.2023"
            />
            <Review
              name="Газиз"
              city="Буньково"
              text="Компания супер! Вика очень приятная, все отвезла в срок!
              Выделили газель под мои гитары. Дали мне своего менеджера! 
              Присылали мне фотки о том как его везут. Мне все понрав. Рекомендую!"
            />
            <Review
              name="Ержан"
              city="Подмывалово"
              text="Компания супер! Вика очень приятная, все отвезла в срок!
              Выделили газель под мои гитары. Дали мне своего менеджера! 
              Присылали мне фотки о том как его везут. Мне все понрав. Рекомендую!"
              date="12.02.2023"
            />
            <Review
              name="Миша"
              city="Бауыржан Момышулы"
              text="Компания супер! Вика очень приятная, все отвезла в срок!
              Выделили газель под мои гитары. Дали мне своего менеджера! 
              Присылали мне фотки о том как его везут. Мне все понрав. Рекомендую!"
              date="12.02.2023"
            />
          </div>
          <div className={css.wrapper_btn}>
            <button className={css.btn}>Смотреть все отзывы</button>
            <button className={css.btn}>Оставить отзыв</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
