import map from "../../images/map_office.png";
import css from "./Map.module.css";

const Map = () => {
  return (
    <div className={css.wrapper}>
      <div
        className={css.img}
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Map;
