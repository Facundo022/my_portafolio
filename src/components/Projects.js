import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Row className="proj-card">
      <Col md={6} className="proj-text">
        <h4>{title}</h4>
        <span>{description}</span>
      </Col>
      <Col md={6} className="proj-img">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} className="project-img"/>
        </a>
      </Col>
    </Row>
  );
};

export const Projects = () => {

  const projects = [
    {
      title: "MLOps Steam Games",
      description: "Individual Machine Learning Operations project detailing the complete process to develop a recommendation system based on NLP and SCIKIT-LEARN for the Steam gaming platform. The project covers from data processing to model implementation and evaluation",
      imgUrl: projImg1,
      url: "https://github.com/Facundo022/PI1_MLOps_videojuegos_steam"
    },
    {
      title: "Analysis of traffic accidents in the Autonomous City of Buenos Aires (CABA)",
      description: "Individual data analysis project aimed at identifying relevant information for the authorities of the Autonomous City of Buenos Aires (CABA), facilitating corrective decision-making to optimize the operation and quality of life in the city",
      imgUrl: projImg2,
      url: "https://github.com/Facundo022/PI2_siniestros_viales"
    },
    {
      title: "Presence in Google Maps and Yelp Platforms for Walgreens",
      description: "Project in which the complete implementation of an end-to-end pipeline for a recommendation system is carried out. This system is based on the analysis of Google and Yelp reviews, with the aim of offering personalized recommendations for the Convenience Stores sector",
      imgUrl: projImg3,
      url: "https://github.com/Facundo022/Proyecto-Google-Yelp"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My portfolio reflects my commitment to excellence and innovation in every challenge I face. These are just a few examples of my work:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey={projects[0].title}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={project.title}>
                            {project.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={project.title} key={index}>
                          <ProjectCard {...project} />
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
