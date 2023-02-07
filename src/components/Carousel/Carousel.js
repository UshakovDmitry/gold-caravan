import React, { Children, cloneElement } from "react";
import css from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ children }) => {
  const PAGE_WIDTH = 950;

  const [pages, setPages] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  console.log(pages)
  const handlerArrowLeft = () => {
    setOffset(currentOffset => {
        const newOffset = currentOffset + PAGE_WIDTH;
        return Math.min(newOffset, 0)
    } )
  };

  const handlerArrowRight = () => {

    setOffset(currentOffset => {

       const newOffset = currentOffset - PAGE_WIDTH;
       const maxOffset = -(PAGE_WIDTH * (pages.length -1));
       console.log(pages)
    // console.log((pages.length - 1))
        return Math.max(newOffset , maxOffset)
        
       })

  };

  React.useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className={css.container}>
      <FaChevronLeft
        size={50}
        className={css.arrow}
        onClick={handlerArrowLeft}
      />
      <div className={css.window}>

        <div 
        className={css.all_pages} 
        style={{
            transform:`translateX(${offset}px)`,
        }}>
          {pages}
        </div>


      </div>
      <FaChevronRight
        size={50}
        className={css.arrow}
        onClick={handlerArrowRight}
      />
    </div>
  );
};

export default Carousel;
