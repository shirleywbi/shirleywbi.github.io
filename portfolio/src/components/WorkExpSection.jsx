import React from 'react';
import Section from './primitives/Section';
import ExperienceCard from './primitives/ExperienceCard';
import { Container, Row, Col } from 'react-bootstrap';
import experiences from '../data/workexperience';

const WorkExpSection = ({id}) => {
    return <Section heading="Experience" id={id}>
        <Container>
            {experiences.map(exp => 
                <Row key={exp.company + exp.title} >
                    <Col>
                        <ExperienceCard
                            dateRange={exp.dateRange}
                            logo={exp.logo} 
                            company={exp.company}
                            title={exp.title}
                            description={exp.description}/>
                    </Col>
                </Row>
            )}
        </Container>
    </Section>
}

export default WorkExpSection;