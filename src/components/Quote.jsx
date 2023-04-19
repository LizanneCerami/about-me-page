import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {

  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>
            <p><q>Quote here</q></p> - Who the quote is by
          </Col>
        </Row>
      </Container>
    </section>
  )
}