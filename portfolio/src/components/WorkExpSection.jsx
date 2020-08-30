import React from 'react';
import Section from './primitives/Section';
import WorkExperience from './primitives/WorkExperience';

const WorkExpSection = () => {
    return <Section heading="Work Experience">
        <WorkExperience 
            dateRange={"May 2020 – Aug 2020"}
            logo={require("../assets/images/fispan.png")} 
            company="FISPAN" 
            title="Software Developer Co-op"/>
        <WorkExperience 
            dateRange={"Sep 2019 – May 2020"}
            logo={require("../assets/images/SAP Concur.png")} 
            company="SAP" 
            title="Software Engineer Intern"/>
    </Section>
}

export default WorkExpSection;