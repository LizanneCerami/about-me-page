import { Col, Container, Row } from "react-bootstrap";

export default function HeroBanner() {
  return (
    <section>
      <Container fluid className="bg-danger d-block w-100%">
        <Row>
          <Col>
            <img src="https://i.etsystatic.com/23369838/r/il/977fc0/2736101232/il_1588xN.2736101232_7fex.jpg" alt="wildflowers" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}