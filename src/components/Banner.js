import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const handleClick = () => {
  window.open('mailto:facundodenis7@gmail.com?subject=Contactar', '_blank');
};

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Scientist", "Data Analytics", "MLOps"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
  <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Facundo`}</h1>
                <h2 className="role">
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Scientist", "Data Analyst" , "MLOps"]'><span className="wrap">{text}</span></span>
                </h2>
                <p>Hello! My name is Facundo Denis and I am from Buenos Aires. Graduated in Data Science. Along the way he acquired a certain level of technical and soft skills, which I would like to continue polishing and improving. My current goal is to continue learning and perfecting my skills as a Data Scientist. Furthermore, in the long term, my goal is to venture into the area of machine learning and deep learning.</p>
                <button onClick={handleClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}