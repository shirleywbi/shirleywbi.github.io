import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Card } from 'react-bootstrap';
import '../../styles/Project.css';

const Project = ({ project }) => {
    const [modalShow, setModalShow] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const { title, image } = project;

    return <>
        <ProjectModal
            project={project}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <Card
            className={"project-card"}
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
            onClick={() => setModalShow(true)}
        >
            {
                showTitle ?
                <Card.Body className={"titled-project-card"}>
                    <h4 className={"project-card-title"}>{title}</h4>
                </Card.Body> :
                <Card.Img className={"image-project-card"} src={image} alt=""/>
            }
        </Card>
    </>
}

export default Project;