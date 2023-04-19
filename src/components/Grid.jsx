import { Col, Container, Row } from "react-bootstrap";

export default function Grid() {

  return (
    <section>
      <Container className= "grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center">Why BocaCode?</h2>
            <p>The field of Software Engineering deeply resonates with me as it presents an opportunity to constantly learn and grow, whilst also allowing me to explore uncharted territories. I am drawn to this career path because of its ever-evolving nature, which ensures that I will always be challenged to improve my skills and knowledge. My top pick for a learning institution is Boca Code as it offers an in-person learning experience and a supportive community. This combination of factors provides me with the necessary resources and environment to excel in my studies and ultimately reach my career goals.</p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center">Exciting Project</h2>
            <p>Write about a project you're excited to work on.. dog adoption matching</p>
          </Col>

          <Col>
            <h2 className="text-center">Ideal work place</h2>
            <p>What is my ideal workplace like? write about it here.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}