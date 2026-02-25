/*animacion*/
import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";

/*en esta parte esta lo de la animacion*/
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); /*Es el índice que lleva la cuenta de cuántas frases han pasado.*/

    const [isDeleting, setIsDeleting] = useState(false); /*Función: Es un interruptor (booleano) que indica si la máquina está escribiendo o borrando.*/

    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"] /*Es el diccionario o lista de palabras que quieres que se turnen en la pantalla.*/

    const [text, setText] = useState(''); /*Es lo que el usuario ve en la pantalla en cada milisegundo.*/

    const [delta, setDelta] = useState(300 - Math.random()* 100); /*Función: Es el reloj o la velocidad (en milisegundos) entre cada letra.*/

    const period = 2000; /*Es el tiempo de espera una vez que la palabra se terminó de escribir.*/
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
       }
    }

    return (
    
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi Im --- '}<span className="wrap"> {text} </span></h1>
                        <p> SOBRE MI</p>
                        <button onClick={() => console.log('connect')}>Let's connects<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                       
                     
                    </Col>
                </Row>

            
            </Container>
        
        </section>
    )
}