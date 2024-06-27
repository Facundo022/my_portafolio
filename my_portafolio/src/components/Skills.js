import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.png";
import SQL from "../assets/img/SQL.png";
import NoSQL from "../assets/img/NoSQL.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have trained in digital platforms and specialized bootcamps, acquiring skills in databases and languages such as Python, SQL, and NoSQL. My passion for programming, data analysis, and the use of advanced techniques such as machine learning and deep neural networks drives me to generate value from complex data.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Python logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Spark logo" />
                  <h5>Spark</h5>
                </div>
                <div className="item">
                  <img src={SQL} alt="SQL logo" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={NoSQL} alt="NoSQL logo" />
                  <h5>NoSQL</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Machine Learning icon" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Neural Networks icon" />
                  <h5>Neural Networks</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Power BI logo" />
                  <h5>Power BI</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Tableau logo" />
                  <h5>Tableau</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background graphic" />
    </section>
  );
}
