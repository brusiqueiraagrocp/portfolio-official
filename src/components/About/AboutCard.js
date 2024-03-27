import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou <span className="purple">Bruno Siqueira </span>
            de <span className="purple"> Santana da Vargem, Minas Gerais, Brasil.</span>
            <br />
            Atualmente, estou empregado como Analista de Suporte de TI Júnior na AgroCP.
            <br />
            Concluirei o curso de Tecnologia em Computação em Nuvem em 2024 na UNOPAR - Universidade Norte do Paraná.
            <br />
            <br />
            Além de trabalhar com tecnologia, aqui estão algumas outras atividades que eu amo fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Ouvir músicas
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Buscar construir coisas que façam diferença!"{" "}
          </p>
          <footer className="blockquote-footer">Bruno Siqueira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
