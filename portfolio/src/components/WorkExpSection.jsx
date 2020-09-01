import React from 'react';
import Section from './primitives/Section';
import WorkExperience from './primitives/WorkExperience';
import { Container, Row, Col } from 'react-bootstrap';

const WorkExpSection = ({id}) => {
    return <Section heading="Experience" id={id}>
        <Container>
            <Row>
                <Col>
                    <WorkExperience 
                        dateRange={"2020"}
                        logo={require("../assets/icons/fispan.png")} 
                        company="FISPAN" 
                        title="Software Developer Co-op"
                        description=""/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WorkExperience 
                        dateRange={"2019-2020"}
                        logo={require("../assets/icons/sap.svg")} 
                        company="SAP" 
                        title="Software Engineer Intern"
                        description=""/>
                </Col>
            </Row>
        </Container>
    </Section>
}

export default WorkExpSection;