import React from 'react';
import Section from './primitives/Section';
import ExperienceCard from './primitives/ExperienceCard';
import { Container, Row, Col } from 'react-bootstrap';

const experiences = [
    {
        company: "Amazon",
        title: "Software Development Engineer",
        dateRange: "2021-Present",
        logo: require("../assets/icons/amazon.png"),
        description: ""
    },
    {
        company: "UBC Tapestry",
        title: "Software Engineer",
        dateRange: "2020-2021",
        logo: require("../assets/icons/tapestry.png"),
        description: "Implemented features, bug fixes, integration and end-to-end tests for a graph-based learning tool that helps students make visual connections between content, built using Vue, PHP, and Jest."
    },
    {
        company: "FISPAN",
        title: "Software Developer Co-op",
        dateRange: "2020",
        logo: require("../assets/icons/fispan.png"),
        description: "Developed ERP plugins through feature development, UI updates, and improvements to data sync behaviour. " +
            "Implemented the front-end and back-end of an error-tracking service using React, Java Spring Boot, and Kotlin."
    },
    {
        company: "SAP",
        title: "Software Engineer Intern",
        dateRange: "2019-2020",
        logo: require("../assets/icons/sap.svg"),
        description: "Created and automated end-to-end testing frameworks using Rspec-Watir and TestCafe, adding accessibility testing based on WCAG 2.0 and email notification testing with the Gmail API. " +
            "Implemented web and mobile tests using the Page Object Model and various selenium frameworks; increasing code coverage by 50% and improving mobile test speeds by 13%. " +
            "Created career development opportunities for 150+ interns as an intern committee lead." 
    },
];

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