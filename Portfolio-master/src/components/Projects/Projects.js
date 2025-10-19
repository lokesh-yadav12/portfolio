import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/matrimony.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/travel.jpg";
import chatify from "../../Assets/Projects/doctor.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/forever.jpg";
import farm from "../../Assets/Projects/farming1.webp";
import school from "../../Assets/Projects/school.webp";
import Ezchef from "../../Assets/Projects/image.png";
import blog from "../../Assets/Projects/blof.png";
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
              imgPath={blog}
              isBlog={false}
              title="Blog-App"
              description="Blog App — A feature-rich blogging platform built with Next.js and TypeScript, offering a clean and responsive UI. Users can explore posts and leave comments.  the app ensures smooth navigation and an engaging reading experience on all devices."
              ghLink="https://github.com/lokesh-yadav12/Blog-app"
               demoLink="https://blog-app-taupe-beta.vercel.app/"
            />
          </Col>

     <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ezchef}
              isBlog={false}
              title="EZCHEF"
              description="Developed a full-stack Restaurant Management System using React.js, Node.js, Express.js, and MongoDB to streamline restaurant operations. Features include order management, menu handling, table reservations, and billing with a responsive UI."
              ghLink="https://github.com/lokesh-yadav12/Restaurant-management-system"
               demoLink="https://restaurant-management-system-brown.vercel.app/"
            />
          </Col>
            
      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ClothNest"
              description="ClothNest  is a fully responsive e-commerce platform built for modern fashion brands. It offers a seamless online shopping experience with dynamic product listings, cart management, and smooth navigation across all devices."
              ghLink="https://github.com/lokesh-yadav12/forever"
               demoLink="https://cloth-nest-iota.vercel.app/"
            />
          </Col>
            
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title="AtoZfarming"
              description="AtoZ Farming is a comprehensive, full-stack agricultural platform built with React, Node.js, and MongoDB. It offers farmers a range of smart tools like crop disease detection, weather forecasting, marketplace integration, and AI-powered recommendations."
              ghLink="https://github.com/lokesh-yadav12/AtoZfarming"
              demoLink="https://ato-zfarming.vercel.app/"
            />
          </Col>


            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Matrimonial-site"
              description="Sukh-vivah is a responsive matrimonial web platform that connects individuals looking for meaningful relationships. It allows users to create detailed profiles, search for matches based on preferences, and communicate securely within the platform."
              ghLink="https://github.com/lokesh-yadav12/Matrimonial-site"
              demoLink="https://matrimonial-site-umber.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DoctorSched"
              description="DoctorSched is a web-based application designed to simplify and digitize the doctor appointment booking process for clinics, hospitals, or private practices. It allows patients to book appointments with available doctors, view schedules, and receive confirmations—eliminating manual paperwork and long queues."
              ghLink="https://doctor-sched.vercel.app/"
              demoLink="https://doctor-sched.vercel.app/" 
              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="Shiv-School"
              description="A responsive, modern school website built with React and Tailwind CSS, highlighting academics, facilities, and community. It features admissions, faculty, events, announcements, and a gallery with lightbox. With smooth Framer Motion animations and easy navigation."
              ghLink="https://github.com/lokesh-yadav12/Shiv-school"
              demoLink="https://shiv-school.vercel.app/"
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Travel-website"
              description="ExploreEase is a dynamic travel website that helps users discover beautiful destinations, book trips, and explore experiences across the globe."
              ghLink="https://github.com/lokesh-yadav12/Travel-website"
              demoLink="https://travel-website-five-sable.vercel.app/"              
            />
          </Col>


          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/lokesh-yadav12"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human."
              
              ghLink="https://github.com/lokesh-yadav12"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
