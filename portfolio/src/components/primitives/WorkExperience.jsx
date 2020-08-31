import React from 'react';
import IconWithLabel from './IconWithLabel';
import { Accordion, Card, Button } from 'react-bootstrap';
import "../../styles/WorkExperience.css";

const WorkExperience = ({dateRange, logo, company, title, description}) => {
    return <Accordion>
        <Card>
            <Card.Header className="wex">
                <div className="wex-content">
                    <h5><img className={"wex-logo"} src={logo} alt={company}/>{company}</h5>
                    <div>
                        {`${title}, ${dateRange}`} 
                    </div>
                </div>
                {/* <Accordion.Toggle as={Button} variant="link" eventKey={company}>
                    <IconWithLabel
                        className={"wow fadeInUp"}
                        icon={["fa", "chevron-down"]}
                        aria-hidden="true"
                    />
                </Accordion.Toggle> */}
            </Card.Header>
            <Accordion.Collapse eventKey={company}>
                <Card.Body>{description}</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
}

export default WorkExperience;