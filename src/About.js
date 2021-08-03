import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';



const About = () => {
    return (
        <>
        <br></br>
        <Container>
            <Row>
                <Col>
            <img
          alt="Profile Pic"
          src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
          width="450"
          height="450"
          className="align-top d-inline-block"
        />
        </Col>
        <Col>
        <Row>
        <h2 className="font-weight-bold">Details</h2>
          <p>
            Name :
            <span className="font-italic font-weight-bold">
            Sandeep kumar K{" "}
            </span>{" "}
          </p>
          <p>
            Qualification :
            <span className="font-italic font-weight-bold">
            B.Tech in Mechanical{" "}
            </span>{" "}
          </p>
          <p>
            Graduated from :
            <span className="font-italic font-weight-bold">
           Raghu Engineering College, Visakhapatnam, Andhra Pradesh{" "} 
            </span>{" "}
          </p>
          <p>
            Works at :
            <span className="font-italic font-weight-bold">
            HCL Technologies{" "}
            </span>{" "}
          </p>
          <p>
            Email :
            <span className="font-italic font-weight-bold">
            sandeepkumar199818@gmail.com{" "}
            </span>{" "}
          </p>
        </Row>
        </Col>
            </Row>

        </Container>
        <br></br>
        </>
    )
}

export default About