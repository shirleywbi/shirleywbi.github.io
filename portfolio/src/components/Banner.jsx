import React from 'react';
import IconWithLabel from './primitives/IconWithLabel';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../styles/Banner.css";

const Banner = () => {
    return <>
        <a className="anchor" id="about" href="none"> </a>
        <Container className="banner-container" fluid>
            <Container className="banner">
                <Row className="justify-content-md-center">
                    <Col className={"welcome-text-container"} xs={7}>
                        <div className="welcome-text">
                            <h1 id="welcome-text-heading">Shirley Bi</h1>
                            <h2 id="welcome-text-subheading">Developer | Designer</h2>
                            <div id="welcome-text-content">
                                <span>Hello! I am a 4th year Computer Science student at the University of British Columbia with a love of </span>
                                <span><b><i>learning</i></b>, </span>
                                <span><b><i>problem solving</i></b>, and </span>
                                <span><b><i>creativity</i></b>.</span>
                            </div>
                            <div className={"contact-container"}>
                                <IconWithLabel
                                    className={"deco-icon pad-right"}
                                    icon={["fa", "envelope"]}
                                    href={"mailto:s.bi@alumni.ubc.ca"}
                                />
                                <IconWithLabel 
                                    className={"deco-icon pad-right"}
                                    icon={["fab", "github"]}
                                    href={"https://github.com/shirleywbi"}
                                />
                                <IconWithLabel
                                    className={"deco-icon pad-right"}
                                    icon={["fab", "linkedin"]}
                                    href={"https://www.linkedin.com/in/shirleywbi"}
                                />
                                <IconWithLabel
                                    className={"deco-icon pad-right"}
                                    icon={["fab", "instagram"]}
                                    href={"https://www.instagram.com/shirleybi.design/"}
                                />
                                <button 
                                    className="btn outlined-btn"
                                    href={require("../assets/SBi_Resume.pdf")}
                                    download
                                >
                                    Resume <IconWithLabel icon={["fa", "download"]} />
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <Image 
                            className="welcome-image" 
                            src={require("../assets/images/portrait.png")}
                            alt=""
                        />
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </Container>
    </>
}

export default Banner;