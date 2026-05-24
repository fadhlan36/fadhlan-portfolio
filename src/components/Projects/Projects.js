import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskify from "../../Assets/Projects/taskify.jpeg";
import portfolio from "../../Assets/Projects/portfolio.jpeg";
import brick from "../../Assets/Projects/brick.jpeg";
// import chatify from "../../Assets/Projects/chatify.png";
import talka from "../../Assets/Projects/talka.jpeg";
import xtation from "../../Assets/Projects/xtation.jpeg";
import jourdy from "../../Assets/Projects/jourdy.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talka}
              isBlog={false}
              title="Talka"
              description="A full-featured social media platform engineered for seamless story sharing."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jourdy}
              isBlog={false}
              title="Jourdy — Your Journal Buddy"
              description="A smart digital journaling web app featuring AI-powered mood detection and personalized 7-day emotional insights."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brick}
              isBlog={false}
              title="Brick Store"
              description="An e-commerce platform dedicated to LEGO enthusiasts, offering a wide selection of sets and exclusive products."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="A Trello-inspired visual project management platform engineered with interactive Kanban workflows."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xtation}
              isBlog={false}
              title="Xtation Studio"
              description="An online reservation web platform for musicians to search, view, and book music studios in real time."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Professional Personal Portfolio"
              description="A clean, responsive portfolio web application designed to showcase development projects and UI/UX mockups."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
