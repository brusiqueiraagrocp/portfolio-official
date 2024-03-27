import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaCloud,
  FaUniversity,
  FaBriefcase,
  FaDatabase,
  FaFileExcel,
  FaWrench,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaShieldAlt
} from "react-icons/fa";

function Certifications() {
  return (
    <div>
      
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={6} md={3} className="tech-icons">
          <FaCloud size={40} />
          <p style={{ fontSize: "14px" }}>Computação em Nuvem - AWS Discovery Day</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaCloud size={40} />
          <p style={{ fontSize: "14px" }}>Cloud Computing - Arquitetura e Aplicações</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaDatabase size={40} />
          <p style={{ fontSize: "14px" }}>Intensivo de Power BI</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaFileExcel size={40} />
          <p style={{ fontSize: "14px" }}>Excel Aplicado à Gestão Empresarial</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaWrench size={40} />
          <p style={{ fontSize: "14px" }}>Montagem e Manutenção de Computadores</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaCode size={40} />
          <p style={{ fontSize: "14px" }}>Curso Introdutório de Javascript</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaGraduationCap size={40} />
          <p style={{ fontSize: "14px" }}>JavaScript Algorithms and Data Structures</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaLaptopCode size={40} />
          <p style={{ fontSize: "14px" }}>DevOps Fundamentals</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaLaptopCode size={40} />
          <p style={{ fontSize: "14px" }}>Linux Fundamentals</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaBriefcase size={40} />
          <p style={{ fontSize: "14px" }}>Coordenador de Sistemas v2 - ERP SiagriAgribusiness</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaBriefcase size={40} />
          <p style={{ fontSize: "14px" }}>Princípios básicos de Marketing Digital</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaUniversity size={40} />
          <p style={{ fontSize: "14px" }}>Curso Introdutório de Lógica de Programação</p>
        </Col>
        <Col xs={6} md={3} className="tech-icons">
          <FaShieldAlt size={40} /> {/* Ícone para a certificação de segurança */}
          <p style={{ fontSize: "14px" }}>BLUEPEX® FIREWALL UTM NGFW ESSENTIALS | Certificação UTM</p> {/* Texto correspondente */}
        </Col>
      </Row>
    </div>
  );
}

export default Certifications;
