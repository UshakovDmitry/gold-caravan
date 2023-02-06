import css from "./Reviews.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Reviews = () => {
  return (
    <>
      <Header />
      <div className={css.main}>
      <ul>
        <li>
          <a href="#">
            <i class="fa-brands fa-instagram instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-whatsapp whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-twitter twitter"></i>
          </a>
        </li>
      </ul>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
