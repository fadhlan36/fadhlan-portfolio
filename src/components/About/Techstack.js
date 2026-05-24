import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiPrisma,
  SiExpress,
  SiVercel,
  SiKotlin,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} color="#ffffff" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp fontSize={"24px"} color="#8993be" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel fontSize={"24px"} color="#FF2D20" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma fontSize={"24px"} color="#2D3748" />
        <div className="tech-icons-text">Prisma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"24px"} color="#ffffff" />
        <div className="tech-icons-text">Express.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel fontSize={"24px"} color="#ffffff" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin fontSize={"24px"} color="#7F52FF" />
        <div className="tech-icons-text">Kotlin</div>
      </Col>
    </Row>
  );
}

export default Techstack;
