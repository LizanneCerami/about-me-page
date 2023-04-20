import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {

  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>
            <p><q>Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.</q></p>
            <p>- Oprah Winfrey</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}