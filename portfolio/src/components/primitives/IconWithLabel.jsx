import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/IconWithLabel.css"

const IconWithLabel = ({icon, label, href}) => {
    return <span>
        {href ? 
        <a href={href}>
            <FontAwesomeIcon className={"header-logo"} icon={icon}/>
            {label}
        </a> : 
        <>
            <FontAwesomeIcon className={"header-logo"} icon={icon}/>
            {label}
        </>}
    </span>
}

export default IconWithLabel;