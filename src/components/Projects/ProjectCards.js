import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiGitlab } from "react-icons/si"; // Importar o ícone do GitLab

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Renderizar o botão GitHub ou GitLab com base na propriedade 'isGitLab' */}
        <Button variant="primary" href={props.repoLink} target="_blank">
          {props.isGitLab ? <SiGitlab /> : <BsGithub />} &nbsp;
          {props.isBlog ? "Blog" : (props.isGitLab ? "GitLab" : "GitHub")}
        </Button>
        {"\n"}
        {"\n"}

        {/* Se o componente contiver link para demonstração e não for um blog, renderizar o botão Demo */}
        {!props.isBlog && props.demoLink && (
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
