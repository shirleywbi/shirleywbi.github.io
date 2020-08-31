import React from 'react';
import Section from './primitives/Section';
import IconWithLabel from './primitives/IconWithLabel';
import "../styles/ContactSection.css";

const ContactSection = ({id}) => {
    return <Section heading="Get In Touch" id={id}>
        <div className={"list-spacing"}>
            <IconWithLabel 
                className={"deco-icon pad-right"}
                icon={["fa", "envelope"]} 
                label={"s.bi@alumni.ubc.ca"} 
                href={"mailto:s.bi@alumni.ubc.ca"}/>
        </div>
        <div className={"list-spacing"}>
            <IconWithLabel 
                className={"deco-icon pad-right"}
                icon={["fab", "github"]} 
                label={"shirleywbi"}
                href={"https://github.com/shirleywbi"}/>
        </div>
        <div className={"list-spacing"}>
            <IconWithLabel 
                className={"deco-icon pad-right"}
                icon={["fab", "linkedin"]} 
                label={"shirleywbi"} 
                href={"https://www.linkedin.com/in/shirleywbi"}/>
        </div>
        <div className={"list-spacing"}>
            <IconWithLabel
                className={"deco-icon pad-right"}
                icon={["fab", "instagram"]} 
                label={"shirleybi.design"} 
                href={"https://www.instagram.com/shirleybi.design/"}/>
        </div>
    </Section>
}

export default ContactSection;