import React from 'react';
import "../../styles/Section.css";

const Section = ({id, heading, children}) => {
    return <section id={id}>
        <h2 className={"section-heading"}>{heading}</h2>
        {children}
    </section>
}

export default Section;