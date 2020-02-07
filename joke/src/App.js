import React from "react";
import "./App.css";
import DayJoke from "./components";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <DayJoke />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
