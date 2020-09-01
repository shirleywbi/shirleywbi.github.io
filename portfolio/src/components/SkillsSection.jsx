import React from 'react';
import Section from './primitives/Section';
import IconWithLabel from './primitives/IconWithLabel';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/SkillsSection.css";

const SkillsSection = ({id}) => {
    const skills = [
        {
            name: 'Java',
            icon: ['fab', 'java']
        },
        {
            name: 'JavaScript',
            icon: ['fab', 'js']
        },
        {
            name: 'Kotlin',
            path: require("../assets/icons/kotlin.png")
        },
        {
            name: 'Python',
            icon: ['fab', 'python']
        },
        {
            name: 'React',
            icon: ['fab', 'react']
        },
        {
            name: 'Node.js',
            icon: ['fab', 'node-js']
        },
        {
            name: 'SQL',
            icon: ['fa', 'database']
        },
        {
            name: 'MongoDB',
            path: require("../assets/icons/mongodb.png")
        },
        {
            name: 'Git',
            icon: ['fab', 'git-alt']
        }
    ];

    const renderSkill = (skill) => {
        if ('icon' in skill) {
            return <IconWithLabel
                    className={"deco-icon pad-right"}
                    key={skill}
                    icon={skill.icon}
                    label={skill.name}
                />
        } else if ('path' in skill) {
            return <span>
                <img className={"skills-logo pad-right"} src={skill.path} alt=""/>
                {skill.name}
            </span>
        } else {
            return <span>
                {skill.name}
            </span>
        }
    }

    return <Section heading="Skills" id={id}>
        <Container>
            <Row className="justify-content-md-center">
                {skills.map(skill => {
                    return <Col xs={11} sm={3} md={3} lg={3} xl={3} 
                        className="skill-pill" 
                        key={skill.name}
                    >
                        {renderSkill(skill)}
                    </Col>
                })}
            </Row>
        </Container>
    </Section>
}

export default SkillsSection;