import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {

  const currentYear = new Date().getFullYear();
  const gitHubURL = "https://github.com/lizannecerami/about-me-page"

  return (
    <footer>

    <Container>
      <Row>
        <Col className="text-center">
          <p>&copy; {currentYear} Lizanne Cerami</p>
          <p><a href={gitHubURL}
           target="_blank"
           rel="noreferrer"> Code in GitHub</a></p>
        </Col>
      </Row>
    </Container>
      
    </footer>
  )
}