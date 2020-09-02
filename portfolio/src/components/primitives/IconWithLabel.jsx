import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/IconWithLabel.css"

const IconWithLabel = ({className, icon, label, href, size = "fa-xl"}) => {
    return <span>
        {href ? 
        <a href={href}>
            <FontAwesomeIcon className={className} icon={icon} size={size}/>
            {label}
        </a> : 
        <>
            <FontAwesomeIcon className={className} icon={icon} size={size}/>
            {label}
        </>}
    </span>
}

export default IconWithLabel;