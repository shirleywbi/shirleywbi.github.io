import React from 'react';
import { Modal } from 'react-bootstrap';
import "../../styles/ProjectModal.css";

const ProjectModal = (props) => {
    const { title, image, techStack, description, links } = props.project;

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
            <div className={"project-img-container"}>
                <img
                    className={"project-img"} 
                    src={image} 
                    alt="" 
                />
            </div>
            <h4 className="project-title">{title}</h4>
            <div className={"badge-container"}>
                {links.map(link => 
                    <a
                        key={link.label}
                        className={"badges-btn"} 
                        href={link.href}
                    >
                        {link.label}
                    </a>)}
            </div>
            <h6 className={"techskills-text"}>
                {techStack.join(", ")}
            </h6>
            <div>
                {description}
            </div>
        </Modal.Body>
    </Modal>
}

export default ProjectModal;