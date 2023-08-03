import React,{useState} from 'react'
import corkData from "../../data/corkData";
import{SlArrowLeft} from "react-icons/sl"
import{SlArrowRight} from "react-icons/sl"
import './styleCorkSlides.scss'
export default function CorkSlides({slidesCork}) {
    const stylesArrow={
        width:"200px",
        height: "100px",
        cursor: "pointer",
      }
      const styleImage={
        width:'1060px',
        height: '450px',
        borderRadius:'120px',
      }
      const [currect, setCurrent] = useState(0);
      const length = slidesCork.length;
      const nextSlide = () => {
        const arrNext = currect === length - 1 ? 0 : currect + 1;
        setCurrent(arrNext);
      };
      const prevSlide = () => {
        const arrPrev = currect === 0 ? length - 1 : currect - 1;
        setCurrent(arrPrev);
      };
      return (
        <div className="sliderCork">
          <SlArrowLeft style={stylesArrow} onClick={prevSlide}/>
          {corkData.map((slide, index) => {
            return (
              <div
                className={index === currect ? "slide active" : "slide"}
                key={index}
              >
                {index === currect && <img src={slide.image} style={styleImage} alt="error" />}
              </div>
            );
          })}
           <SlArrowRight style={stylesArrow} onClick={nextSlide}/>
        </div>
      );
}
