import React from 'react';
import Section from './primitives/Section';
import IconWithLabel from './primitives/IconWithLabel';
import "../styles/SkillsSection.css";

const SkillsSection = () => {
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

    return <Section heading="Skills">
        <div className={"skill-grid"}>
            {skills.map(skill => {
                return <div className="skill-pill" key={skill.name}>
                    {renderSkill(skill)}
                </div>
            })}
        </div>
    </Section>
}

export default SkillsSection;