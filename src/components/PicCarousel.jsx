import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function picCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col className="p-0">
            <Carousel interval={2000}>
              <Carousel.Item>
                <img src= "/images/carousel-1.jpg"
                  className= "d-block w-100"
                  alt="Jhonnas and me at a wedding together."/>
                {/* <Carousel.Caption>
                <h2>First Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

              <Carousel.Item>
                <img src="/images/carousel-2.jpg"
                  className= "d-block w-100"
                  alt="Lucy in a hoodie."/>
                {/* <Carousel.Caption>
                <h2>Second Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption>  */}
              </Carousel.Item>

              <Carousel.Item>
                <img src="/images/carousel-3.jpg"
                  className= "d-block w-100"
                  alt="Jhonnas and Me smiling close together"/>
                {/* <Carousel.Caption>
                <h2>Third Item</h2>
                <p>First items are great because they are the first.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

              <Carousel.Item>
                <img src="images/carousel-5.jpg"
                className="d-block w-100"
                alt="Jhonnas and me in Boston" />
              </Carousel.Item>

              <Carousel.Item>
                <img src="images/carousel-4.jpg"
                className="d-block w-100"
                alt="Jhonnas smiling at a bar."/>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}