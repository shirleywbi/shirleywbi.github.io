import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Card } from 'react-bootstrap';
import '../../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    const [modalShow, setModalShow] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const { title, thumbnail, image } = project;

    return <>
        <ProjectModal
            project={project}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <div className={"project-card-container"}>
            <Card
                className={"project-card"}
                onMouseEnter={() => setShowTitle(true)}
                onMouseLeave={() => setShowTitle(false)}
                onClick={() => setModalShow(true)}
            >
                {
                    showTitle ?
                    <Card.ImgOverlay className={"project-card-overlay"}>
                        <h4>{title}</h4>
                    </Card.ImgOverlay> : null
                }
                <Card.Img 
                    className={"image-project-card"} 
                    src={thumbnail ? thumbnail : image} 
                    alt=""
                    variant="top"
                />
            </Card>
        </div>
    </>
}

export default ProjectCard;