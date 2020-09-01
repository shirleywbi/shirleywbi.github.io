import React from 'react';
import "../../styles/Section.css";

const Section = ({id, heading, children}) => {
    return <>
        <a class="anchor" id={id}></a>
        <section>
            <h2 className={"section-heading"}>{heading}</h2>
            {children}
        </section>
    </>
}

export default Section;