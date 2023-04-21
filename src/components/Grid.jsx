import { Col, Container, Row } from "react-bootstrap";

export default function Grid() {

  return (
    <section>
      <Container className= "grid-container">
        <Row className="justify-content-center px-5">
          <Col sm={12} md={10} lg={4}>
            <h2 className="text-center">My Decision to Pursue Software Engineering</h2>
            <p>Software Engineering has captured my interest as a career path due to its dynamic nature that continually presents opportunities for learning and growth. Pursuing this field will allow me to consistently challenge myself and acquire new skills throughout my professional journey. Additionally, I appreciate the potential for a flexible work-life balance that this field can offer which will allow me to pursue new adventures in my personal life as well. After researching several schools, I came to the conclusion that Boca Code would present me with the best educational opportunity. I was drawn to their in-person approach to learning and the supportive community they offer, which I believe will contribute significantly to my academic and professional success.</p>
          </Col>

          <Col sm={12} md={10} lg={4}>
            <h2 className="text-center">Projects That Excite Me</h2>
            <p>As I begin my journey to becoming a Software Engineer, I am thrilled about the opportunity to work on a range of projects that test my skills and creativity. One project that holds special significance to me is developing a matching app that connects stray pets with loving families. Having personally adopted my dog through the Humane Society, I am passionate about creating a service that simplifies the process of matching people with pets. I aspire to not only help individuals find their perfect companion but also assist shelter animals in finding a permanent and loving home. The thought of making a positive impact on the lives of both pets and people through my work as a Software Engineer brings me great joy and is a driving force behind my pursuit of this dynamic and rewarding career.</p>
          </Col>

          <Col md={10} lg={4}>
            <h2 className="text-center">My Ideal Work Place</h2>
            <p>When considering an ideal workplace, my top priorities are happiness and stability. While I've worked at companies that offer attractive perks such as game rooms, quiet spaces, and happy hours on Fridays, I've found that these benefits are not enough if the fundamental aspects of the workplace are lacking. My ultimate goal is to secure a position where I am valued for my contributions and compensated fairly for my work. While I would love the option to travel and work remotely, what I value most is a healthy work-life balance that allows me to pursue my passions and experience new things outside of work. In any ideal role, I hope to find a workplace that aligns with my values and enables me to lead a fulfilling life both inside and outside of work.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}