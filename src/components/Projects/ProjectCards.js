import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { SiGitlab } from "react-icons/si"; 
import { CgWebsite } from "react-icons/cg"; // Importar o ícone do CgWebsite

function ProjectCards(props) {
  const handleClick = () => {
    window.open(props.ghLink, "_blank"); // Abrir o link em uma nova aba ao clicar no botão GitHub ou GitLab
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Renderizar o botão GitHub ou GitLab com base na propriedade 'isGitLab' */}
        <Button variant="primary" onClick={handleClick}>
          {props.isGitLab ? <SiGitlab /> : <BsGithub />} &nbsp;
          {props.isGitLab ? "GitLab" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* Se o componente contiver link para demonstração, renderizar o botão Demo */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
