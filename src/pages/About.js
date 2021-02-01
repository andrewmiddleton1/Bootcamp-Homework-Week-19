import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table/table.js";


function About() {
  return (
    <div>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To The Employee Directory!</h1>
            <p>Click on Column Names to Sort, or "Search" by Employee Name</p>
            <p>Note: if employees are not appearing, please refresh this screen</p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
