import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { FaDatabase, FaVideo, FaShieldAlt } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVideo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt />
      </Col>
    </Row>
  );
}

export default Toolstack;
