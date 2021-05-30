// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
// import {Carousel} from 'react-bootstrap';
// import img1 from "../images/tution1.jpg";
// import img2 from "../images/tution2.jpg";
// import img3 from "../images/tution3.jpg";
// import img4 from "../images/tution4.webp";
// import img5 from "../images/tution5.jpg";
// const Carousels = (props) => {
//   return (
// <div className="car-div">
//                 <Carousel className="mycar" controls={false} indicators={false}>
//   <Carousel.Item >
//     <img
//       className="d-block myclass"
//       src={img1}
//       alt="First slide" style={{height: "70vh", width: "80vw"}}
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  myclass"
//       src={img2}
//       alt="Third slide" style={{height: "60vh", width: "100vw"}}
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  myclass"
//       src={img3}
//       alt="Third slide" style={{height: "60vh", width: "100vw"}}
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  myclass"
//       src={img4}
//       alt="Third slide" style={{height: "60vh", width: "100vw"}}
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  myclass"
//       src={img5}
//       alt="Third slide" style={{height: "60vh", width: "100vw"}}
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> 
// </div>
//   );
// };

// export default Carousels;
import React from "react";
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";
import "../styles/carousel.css";
import img0 from "../images/tution1.jpg";
import img1 from "../images/tution2.jpg";
import img2 from "../images/tution3.jpg";
import img3 from "../images/tution4.webp";
import img4 from "../images/tution5.jpg";
// import img1 from "../images/tution1.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  const myimages=[img0, img1, img2, img3, img4];
  return (
    <Container className="myCarousel">    
    <Slider {...settings}>
        {myimages.map((img)=>{
            return (
                <React.Fragment>
                    <Col md-4>
                        <Card>
                            <Card.Img variant="top" src={img} className="carousel-img"/>
                        </Card>
                    </Col>
                </React.Fragment>
            );
        })}
    </Slider>
    </Container>
  );
}