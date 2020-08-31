import React from 'react';
import IconWithLabel from './primitives/IconWithLabel';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import "../styles/Banner.css";

const Banner = () => {
    return <div className="welcome-area" id="home">
        <div className="single-welcome-slide bg-img bg-overlay">
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    {/* <!-- Welcome Text --> */}
                    <Col className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 welcome-text-container">
                        <div className="welcome-text">
                            <h2 id="welcome-text-heading">Shirley Bi</h2>
                            <p id="welcome-text-content"><b>Developer | Designer</b></p>
                            <p id="welcome-text-content">
                                <span>Hello! I am a 4th year Computer Science student at the University of British Columbia with a love of </span>
                                <span><b><i>learning</i></b>, </span>
                                <span><b><i>problem solving</i></b>, and </span>
                                <span><b><i>creativity</i></b>.</span>
                            </p>
                        </div>
                        <div>
                            <IconWithLabel
                                className={"deco-icon pad-right wow fadeInUp"}
                                icon={["fa", "envelope"]}
                                href={"mailto:s.bi@alumni.ubc.ca"}
                                aria-hidden="true"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.4s"
                            />
                            <IconWithLabel 
                                className={"deco-icon pad-right wow fadeInUp"}
                                icon={["fab", "github"]}
                                href={"https://github.com/shirleywbi"}
                                data-wow-duration="0.6s"
                                data-wow-delay="0.4s"
                            />
                            <IconWithLabel
                                className={"deco-icon pad-right wow fadeInUp"}
                                icon={["fab", "linkedin"]}
                                href={"https://www.linkedin.com/in/shirleywbi"}
                                data-wow-duration="0.6s"
                                data-wow-delay="0.4s"
                            />
                            <IconWithLabel
                                className={"deco-icon pad-right wow fadeInUp"}
                                icon={["fab", "instagram"]}
                                href={"https://www.instagram.com/shirleybi.design/"}
                                data-wow-duration="0.6s"
                                data-wow-delay="0.4s"
                            />
                            <Button 
                                className="btn outlined-btn wow fadeInUp"
                                href="assets/SBi_Resume.pdf" 
                                download
                                data-wow-delay="0.4s"
                            >
                                Resume <IconWithLabel icon={["fa", "download"]} />
                            </Button>
                        </div>
                    </Col>
                    <Col className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Image 
                            className="welcome-image" 
                            src={require("../assets/images/portrait.png")}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default Banner;