import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
} from 'react-bootstrap'

const BootstrapTest = props => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>React Bootstrap</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
        </Col>
      </Row>
    </Container>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../../../public/logo192.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  </>
)

export default BootstrapTest