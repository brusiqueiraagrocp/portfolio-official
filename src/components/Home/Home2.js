import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiOutlineMail } from "react-icons/ai"; // Adicionado
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE <span className="purple"> APRESENTAR </span>- ME
            </h1>
            <p className="home-about-body">
            Entusiasta da tecnologia com experiência em suporte de TI e apaixonado por programação. Eu acho ... 🤷‍♂️
              <br />
              <br />Especialista em
              <i>
                <b className="purple"> DevOps e Linux Fundamentals, </b>
              </i>
              <br />
              
              certificado em várias áreas, incluindo Cloud Computing e Desenvolvimento Web. &nbsp;
              <i>
                <b className="purple">Sempre em busca de desafios e aprendizados, comprometido em contribuir para projetos inovadores e explorar novas tecnologias.
                </b>
              </i>
              <br />
              <br />
              Determinado, curioso e criativo, buscando constantemente o aprimoramento profissional e pessoal. 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE ME</h1>
            <p>
            Sinta-se à vontade para se<span className="purple"> conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/brusiqueira9"
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/bruno-siqueiratec/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.instagram.com/brunogsiqueira_/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillInstagram />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="mailto:contato@brunosiqueira.tec.br"
      className="icon-colour home-social-icons"
    >
      <AiOutlineMail />
    </a>
  </li>
</ul>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
