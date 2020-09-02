import React from 'react';
import { Modal } from 'react-bootstrap';
import "../../styles/ProjectModal.css";

const ProjectModal = (props) => {
    const { title, image, video, techStack, description, links } = props.project;

    return <Modal
        {...props}
        className={"project-modal"}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header className={"project-modal-header"} closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className={"project-img-container"}>
                { video ? 
                    <iframe 
                        title={title}
                        width="560" 
                        height="315" 
                        src={video} 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    /> :
                    <img
                        className={"project-img"} 
                        src={image} 
                        alt="" 
                    />
                }
            </div>
            <div className={"project-title-container"}>
                <h4 className="project-title">{title}</h4>
            </div>
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