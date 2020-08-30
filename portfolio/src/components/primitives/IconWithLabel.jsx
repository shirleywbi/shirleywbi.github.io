import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/IconWithLabel.css"

const IconWithLabel = ({className, icon, label, href}) => {
    return <span>
        {href ? 
        <a href={href}>
            <FontAwesomeIcon className={className} icon={icon}/>
            {label}
        </a> : 
        <>
            <FontAwesomeIcon className={className} icon={icon}/>
            {label}
        </>}
    </span>
}

export default IconWithLabel;