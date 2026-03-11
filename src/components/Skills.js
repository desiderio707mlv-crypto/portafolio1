import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javaLogo from "../assets/img/javascript-logo.png";
import react from "../assets/img/react-logo.png";
import bostra from "../assets/img/Bootstrap_Logo.png";
import css from "../assets/img/CSS.png";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/html.png";


export const Skills = () => {
   const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Habilidades</h2>
                        <p>Estas son las tecnologías con las que he trabajado para crear soluciones web modernas y eficientes.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={javaLogo} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bostra} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}