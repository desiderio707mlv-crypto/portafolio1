

import { Col, Container, Row, Tab, TabContent, TabPane, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import electronica1 from "../assets/img/BCD.jpeg";
import electronica2 from "../assets/img/sistema_calor.jpeg";
import proyectoPilly from "../assets/img/proyectoPilly.png";
export const Projects = () => {
    const projects = [
        {
            title: 'Check-Tilla',
            description : "Registro de Medicinas",
            imgUrl: proyectoPilly,
        },

        /*{
            title: 'Business Startup',
            description : "Desing & Development",
            imgUrl: projImg2,
        },

        {
            title: 'Business Startup',
            description : "Desing & Development",
            imgUrl: projImg3,
        },*/

       
        
    ];

    const projects2 = [
        
        {
            title: '4-Bit Arithmetic Unit',
            description : "Unidad de resta binaria mediante complemento a dos y gestión de acarreo (Carry).",
            imgUrl: electronica1,
        },

        {
            title: 'Smart Thermal Monitor',
            description : "Sistema de control ambiental con Arduino, Bluetooth y sensores DS18B20.",
            imgUrl: electronica2,
        },
        
    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>LASLFAS Aasldfja asfd alfjaksldf asfd aljdfalkfd</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Apps Webs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Proyectos de Electrónica</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                    Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                                </Nav>
                                <TabContent>

                                {/* Primer Tab: Apps Webs */}
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    {projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                        )
                                    })}
                                    </Row>
                                </Tab.Pane>

                                {/* Segundo Tab: Proyectos de Electrónica */}
                                <Tab.Pane eventKey="second">
                                    <Row>
                                    {/* Cambiamos 'projects' por 'projects2' para usar el segundo arreglo */}
                                    {projects2.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                        )
                                    })}
                                    </Row>
                                </Tab.Pane>

                                {/* Tercer Tab */}
                                <Tab.Pane eventKey="third">
                                    <p>Nada por aquí</p>
                                </Tab.Pane>
                                </TabContent>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src =  {colorSharp2}></img>
        </section>
    )

}