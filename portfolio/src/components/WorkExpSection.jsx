import React from 'react';
import Section from './primitives/Section';
import WorkExperience from './primitives/WorkExperience';

const WorkExpSection = ({id}) => {
    return <Section heading="Work Experience" id={id}>
        <WorkExperience 
            dateRange={"2020"}
            logo={require("../assets/icons/fispan.png")} 
            company="FISPAN" 
            title="Software Developer Co-op"
            description=""/>
        <WorkExperience 
            dateRange={"2019-2020"}
            logo={require("../assets/icons/sap.svg")} 
            company="SAP" 
            title="Software Engineer Intern"
            description=""/>
    </Section>
}

export default WorkExpSection;