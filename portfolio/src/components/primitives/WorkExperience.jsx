import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "../../styles/WorkExperience.css";

const WorkExperience = ({dateRange, logo, company, title}) => {
    return <Row className="justify-content-md-center list-spacing" xs={15} md={15} lg={15}>
        <Col>
            <img className={"wex-logo"} src={logo} alt={company}/>
        </Col>
        <Col>
            {title}
        </Col>
        <Col>
            {dateRange}
        </Col>
    </Row>
}

export default WorkExperience;