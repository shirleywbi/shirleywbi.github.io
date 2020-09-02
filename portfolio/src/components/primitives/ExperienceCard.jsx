import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../styles/ExperienceCard.css";

const ExperienceCard = ({dateRange, logo, company, title, description}) => {
    return <Card className={"wex"}>
        <Card.Body>
            <Container>
                <Row>
                    <Col xs={0} sm={2}>
                        <img className={"wex-logo"} src={logo} alt={company}/>
                    </Col>
                    <Col className={"wex-content"}>
                        <Card.Title>{company}</Card.Title>
                        <Card.Subtitle>{title}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                    </Col>
                    <Col className={"wex-date"} xs={0} sm={2} md={2}>
                        <div>{dateRange}</div>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
}

export default ExperienceCard;