import React from 'react';
import "../../styles/Section.css";

const Section = ({heading, children}) => {
    return <section>
        <h2 className={"section-heading"}>{heading}</h2>
        {children}
    </section>
}

export default Section;