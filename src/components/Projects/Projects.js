import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import siteAgroCP from "../../Assets/Projects/siteAgroNovo.png";
import chamaMoto from "../../Assets/Projects/chamamotorista.png";
import gestorRh from "../../Assets/Projects/gestor_rh.png";
import moniRede from "../../Assets/Projects/moni_rede.png";
import expenseGuru from "../../Assets/Projects/expense_guru.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siteAgroCP}
              isBlog={false}
              isGitLab={false}
              title="Site Institucional AgroCP"
              description="Desenvolvi o site institucional da AgroCP utilizando HTML, CSS, JavaScript, PHP (para formulários de contato e newsletter com SMTP), além de Firebase para banco de dados e armazenamento de arquivos. O site possui páginas sobre os produtos, história da empresa, sustentabilidade e um formulário de contato para facilitar a comunicação. O design responsivo e voltado para a usabilidade oferece uma navegação intuitiva e acessível em dispositivos diversos."
              demoLink="https://agrocp.agr.br/"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseGuru}
              isBlog={false}
              isGitLab={false}
              title="Expense Guru - Controle Financeiro"
              description="O Expense Guru é uma aplicação web moderna para gerenciamento financeiro pessoal, desenvolvida com React, TypeScript e Supabase. Oferece funcionalidades completas como registro de receitas e despesas, categorização de transações, controle de contas bancárias, gestão de metas financeiras, relatórios detalhados e dashboard interativo. A interface intuitiva e responsiva utiliza Tailwind CSS e Shadcn/ui, proporcionando uma experiência de usuário fluida e agradável."
              ghLink="https://github.com/brusiqueira9/expense-guru-supabase"
              demoLink="https://guruexpense.netlify.app/"
            />
          </Col> 

                
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chamaMoto}
              isBlog={false}
              isGitLab={false}
              title="App para chamar motorista por voz"
              description="A aplicação web 'Chama Motorista' é um sistema logístico desenvolvido com HTML, CSS e JavaScript, que permite inserir o nome do motorista, placa do veículo e tipo de operação (carregamento ou descarga). Utilizando vozes de IA, como Microsoft Thalita Online, a aplicação anuncia essas informações e armazena os últimos chamados no localStorage, facilitando o reuso com um botão dedicado. O design busca ser intuitivo e está em constante melhoria para otimizar a experiência do usuário."
              ghLink="https://github.com/brusiqueira9/chamada_motorista"
              demoLink="https://chamamotorista.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moniRede}
              isBlog={false}
              isGitLab={false}
              title="Monitoramento de Rede"
              description="O Sistema de Monitoramento de Rede é uma solução desenvolvida para a AgroCP Filial, com foco em garantir a estabilidade operacional e a eficiência do ambiente de TI. Criado com tecnologias modernas como Cors, Express, Sequelize, Socket.io, JWT e contêineres Docker, o sistema automatiza o monitoramento de dispositivos e impressoras. Ele possui funcionalidades como monitoramento contínuo, envio de notificações personalizadas por e-mail sobre dispositivos offline ou níveis baixos de toner, registro de logs e agendamento de verificações periódicas. Com uma interface prática e alertas em tempo real, busca prevenir interrupções, otimizar o tempo de gestão e aumentar a confiabilidade da rede."
              demoLink="https://www.linkedin.com/posts/bruno-siqueiratec_tenho-o-prazer-de-compartilhar-que-pensando-activity-7268052233202638848-6L-s?utm_source=share&utm_medium=member_desktop"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestorRh}
              isBlog={false}
              isGitLab={false}
              title="Gestor RH"
              description="O Gestor RH é uma aplicação web feita com HTML, CSS e JavaScript, focada na otimização da gestão de recursos humanos. Possui quatro páginas principais: Currículos, Vagas Ativas, Cadastrar Vagas e Notificações. A página de Currículos permite o gerenciamento dos currículos, enquanto a de Vagas Ativas exibe as oportunidades disponíveis. O sistema se integra em tempo real ao site da AgroCP, utilizando um banco de dados no Firebase, garantindo informações atualizadas. Com uma interface intuitiva e notificações em tempo real, busca melhorar a eficiência nos processos de recrutamento e seleção."
              demoLink="https://youtu.be/OKpIRZng4kA"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              isGitLab = {false}
              title="Ficha de reserva de hotel"
              description="Nossa ficha de reserva de hotel, desenvolvida para a AgroCP, é uma solução técnica que padroniza o processo de reserva de quartos para hóspedes. Criada com HTML, CSS e JavaScript, gera PDFs personalizados com a marca da AgroCP para cada reserva confirmada, simplificando e tornando mais eficiente a comunicação e o registro de reservas nos hotéis parceiros."
              ghLink="https://github.com/brusiqueira9/ficha-reserva-hotel"
              demoLink="https://ficha-reserva-hotel.netlify.app/"
              
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isGitLab={false}
              title="Vou revelar seu destino"
              description="A página web 'Destino Mágico' é um projeto desenvolvido durante a Maratona Explorer do Rocketseat. Utilizando HTML, CSS e JavaScript, o site interage com o usuário, fazendo perguntas ao 'gênio' para revelar um destino. Com recursos como variáveis, tipos de dados, operadores, condicionais, estruturas de dados e funções, o projeto cria uma experiência divertida e interativa para os usuários, enquanto explora conceitos essenciais de desenvolvimento web. Além disso, o site é visualmente atraente, com imagens de uma bola de cristal e um fundo envolvente para criar uma atmosfera mágica."
              ghLink="https://github.com/brusiqueira9/maratona-explorer-1"
              demoLink="https://destinomagico.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              isGitLab={false}
              title="IAC - Automação de Gerenciamento de Usuários e Diretórios no Linux"
              description="Este script em bash, parte do curso de Linux da DIO, automatiza a criação de diretórios, grupos de usuários e usuários em um sistema Linux. Ele cria diretórios específicos, grupos de usuários correspondentes e atribui permissões adequadas aos diretórios. Além disso, define senhas padrão para os usuários criados. Essa automação simplifica a administração e organização de arquivos e recursos do sistema."
              ghLink="https://github.com/brusiqueira9/linux-projeto1-iac"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              isGitLab={false}
              title="Boletim Informativo AgroCP"
              description="O projeto em Node.js tem como objetivo automatizar a coleta e envio de informações essenciais do mercado agrícola. Utilizando bibliotecas específicas, como axios, cheerio, nodemailer e rss-parser, o sistema obtém notícias, previsão do tempo e cotações, agregando tudo em um boletim informativo enviado por e-mail aos interessados. Com uma estrutura modular e empregando práticas modernas de JavaScript assíncrono, o projeto proporciona uma solução eficiente para monitoramento e análise de informações do setor agrícola."
              ghLink="https://github.com/brusiqueiraagrocp/boletim-informativo-agrocp"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              isGitLab={true}
              title="Projeto de Integração Contínua no GitLab"
              description="Este projeto do curso DevOps Fundamentals no GitLab é uma implementação prática da integração contínua (CI). Ele oferece aos alunos uma oportunidade de aplicar os conceitos aprendidos durante o curso, especialmente na configuração de pipelines de CI/CD. Os alunos aprendem a criar uma conta no GitLab, configurar um repositório, baixar o projeto, fazer modificações e enviar as alterações para validação. Além disso, eles são instruídos a implementar pipelines de CI/CD para automatizar a construção, teste e implantação do projeto, garantindo assim um processo de desenvolvimento ágil e eficiente."
              ghLink="https://gitlab.com/siqueirabruno455/devops1"
              demoLink="https://repositoriodevops.netlify.app/"
            />
          </Col>

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
