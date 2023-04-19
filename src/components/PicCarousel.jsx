import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function picCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col className="p-0">
            <Carousel>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=1"
                  className= "d-block w-100"
                  alt="slide 1"/>
                <Carousel.Caption>
                <h2>First Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=2"
                  className= "d-block w-100"
                  alt="slide 1"/>
                <Carousel.Caption>
                <h2>Second Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption> 
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=3"
                  className= "d-block w-100"
                  alt="slide 1"/>
                <Carousel.Caption>
                <h2>Third Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}