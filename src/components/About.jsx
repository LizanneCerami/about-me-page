import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

export default function About () {
  const [imgIndex, setImgIndex] = useState(0);

  const imgArray = [
    "IMG_6577.jpg",
    "me.jpg"
  ];

  if (imgIndex >= imgArray.length)
    setImgIndex(0);


  console.log(imgIndex)
  return(
    <main>
      <Container className="main-container">
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img  
              src={"/images/"+imgArray[imgIndex]}
              alt = "Profile"
              className="rounded-circle profile-pic" 
              onClick={() => setImgIndex(imgIndex+1)} />
          </Col>

          <Col sm={12} md={6}>
            <h1 className="mt-3">Lizanne Cerami</h1>
            <p>I am a unique individual with a quirky personality that makes me stand out from the crowd. I have a deep appreciation for the natural world and love spending time outdoors, particularly with my dog, Lucy, by my side. With a diverse background in finance and medical, I have gained valuable knowledge and skills, but now I am eager to explore a more creative career path that will allow myself to fulfill my passions and continue to grow both personally and professionally. I am excited to embark on new adventures, explore new places, and try new things, and I am confident that my adventurous spirit will guide me towards success.</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}