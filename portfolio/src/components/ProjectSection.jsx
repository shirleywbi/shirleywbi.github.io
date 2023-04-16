import React from 'react';
import Section from './primitives/Section';
import ProjectCard from './primitives/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/ProjectSection.css';
import projects from "../data/projects";

const ProjectSection = ({id}) => {
    return <Section heading="Projects" id={id}>
        <Container fluid="md">
            <Row className="justify-content-md-center">
                {projects.map(project => 
                    <Col 
                        xs={12} sm={12} md={6} lg={6} xl={4}
                        key={JSON.stringify(project.title)} 
                    >
                        <ProjectCard
                            project={project}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    </Section>
}

export default ProjectSection;