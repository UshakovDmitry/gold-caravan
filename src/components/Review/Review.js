import css from "./Review.module.css";



const Review = (props) => {
  return (
    <div className={css.review_wrapper}>
      <div className={css.title}>
        <h2 className={css.name}>{props.name}</h2>
        <h3 className={css.city}>{props.city}</h3>
        <h4 className={css.logo}>GOLD CARAVAN</h4>
      </div>

      <div className={css.p}>
        {props.text}
      </div>

      <div className={css.date}>{props.date}</div>
    </div>
  );
};

export default Review;
