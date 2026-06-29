

import { Col, Container, Row, Tab, TabContent, TabPane, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import electronica1 from "../assets/img/BCD.jpeg";
import electronica2 from "../assets/img/sistema_calor.jpeg";

import proyectoPilly from "../assets/img/proyectoPilly.png";

import certificado1 from "../assets/img/Certificado_AWS.png";
import certificado2 from "../assets/img/Certificado_HackingEtico.png";

import certificado3 from "../assets/img/Exploración_Redes_CISCO_PT.jpg";
import certificado4 from "../assets/img/Introducción_CISCO_PT.jpg";
import certificado5 from "../assets/img/Workshop AWS certificado 2.png";

import certificado6 from "../assets/img/PUA_DESIDERIO VERGARA UA_page-0001.jpg";

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

    const projects3 = [

       {
            title: 'AWS & IA Generativa',
            description: "Capacitación en despliegue de infraestructura en la nube (AWS) mediante Inteligencia Artificial Generativa y optimización de flujos tecnológicos.",
            imgUrl: certificado1,
        },

        {
            title: 'Workshop "Crea tu primera aplicación con Gen AI en AWS"',
            description: "Desarrollo práctico de una aplicación utilizando servicios de inteligencia artificial generativa (Gen AI) en la nube de AWS.",
            imgUrl: certificado5,
        },

        {
            title: 'Hacking Ético',
            description: "Certificación en fundamentos de ciberseguridad, identificación de vulnerabilidades y técnicas de defensa en entornos controlados.",
            imgUrl: certificado2,
        },

        {
            title: 'Introducción a Cisco Packet Tracer',
            description: "Introducción práctica al uso de la herramienta de simulación de redes Cisco Packet Tracer y sus componentes.",
            imgUrl: certificado3,
        },

        {
            title: 'Exploración de redes con Cisco Packet Tracer',
            description: "Modelado, configuración y exploración avanzada de arquitecturas de red mediante Cisco Packet Tracer.",
            imgUrl: certificado4,
        },

        
        
    ];

    const projects4 = [
        {
            title: 'Premio UA',
            description : "Por destacadas calificaciones, durante el período 2025-2026, el premio Unidad Académica de la carrera Ingeniería en Ciencias de la Computación",
            imgUrl: certificado6,
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

    return(
        <section className="project" id="projects">
            <Container>
    <Row>
        <Col>
            <h2>Proyectos</h2>
            <p>Explora una muestra de mi trabajo</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                {/* Navegación de Pestañas */}
                <Nav variant="pills" className="nav-pills mb-5 justify-content-start flex-nowrap overflow-x-auto" id="pills-tab" style={{ whiteSpace: 'nowrap' }}>

                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-nowrap" id="pills-tab"></Nav>
                    <Nav.Item>
                        <Nav.Link eventKey="first">Apps Webs</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link eventKey="second">Proyectos de Electrónica</Nav.Link>
                    </Nav.Item>
                    
                    {/* CORRECCIÓN: Se agregó <Nav.Item> alrededor de Certificados */}
                    <Nav.Item>
                        <Nav.Link eventKey="third">Certificados</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link eventKey="four">Reconocimientos</Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Contenido de las Pestañas */}
                <Tab.Content>
                    
                    {/* Primer Tab: Apps Webs */}
                    <Tab.Pane eventKey="first">
                        <Row>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                    </Tab.Pane>

                    {/* Segundo Tab: Proyectos de Electrónica */}
                    <Tab.Pane eventKey="second">
                        <Row>
                            {projects2.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                    </Tab.Pane>

                    {/* Tercer Tab: Certificados */}
                    <Tab.Pane eventKey="third">
                        <Row>
                            {projects3.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                    </Tab.Pane>

                    {/* Cuarto Tab: Reconocimientos */}
                    <Tab.Pane eventKey="four">
                        <Row>
                            {projects4.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                    </Tab.Pane>

                </Tab.Content>
            </Tab.Container>
        </Col>
    </Row>
</Container>
            <img className="background-image-right" src =  {colorSharp2}></img>
        </section>
    )

}