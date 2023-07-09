
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// gsap

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


export interface ICarouselProps {
    images: 
        {
            path: string
            alt: string;
        }[]
}

export function Carousel (props: ICarouselProps) {

    React.useEffect(() => {
        gsap.to('.image-carousel img', {
            scrollTrigger: {
              trigger: '.image-carousel',
            },
            scale: 1.0, 
            duration: 1
          })
    }, [])

  return (
    <Container fluid className='image-carousel'>
        <Row>
            {
                props.images.map((item,index) => <Col className='g-0' key={index}><img className='img-fluid' src={item.path} alt={item.alt}/></Col>)
            }
        </Row>
    </Container>  
  );
}


