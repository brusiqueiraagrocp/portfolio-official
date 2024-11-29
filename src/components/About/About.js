import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Sobre() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Saiba quem <strong className="purple">eu sou</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        Conjunto de habilidades <strong className="purple">profisionais </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que uso </h1>
        <Toolstack />

        <h1 className="project-heading"> 
        <strong className="purple">Certificações</strong> e Conquistas </h1>
        <Github />

        
      </Container>
    </Container>
  );
}

export default Sobre;
