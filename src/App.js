import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return (
        <React.Fragment>
            <div className="App">
                <Navbar bg="secondary" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Tobi's Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="text-center">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>Fortnite</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>Apex</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>Call Of Duty</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
                </div>
        </React.Fragment>
    );
}

export default App;
