import * as React from 'react';
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap';
import localFont from 'next/font/local'

// gsap

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const oxygenBold = localFont({ src: '../assets/fonts/oxygen-bold.ttf' })
const sans = localFont({ src: '../assets/fonts/SourceSansPro-Regular.ttf' })

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
   
    <Container fluid className={sans.className + ' pt-5 pb-5  section section-white'}>

        <Row>
            <Col className='col-12 col-md-4'>
                <h3>ROPETEST</h3>
                <div>©2023 Ropetest </div>
            </Col>

            <Col className='col-12 col-md-4'>
                <div>Queensland</div>
                <div>Email: <a href='mailto:terry@ropetest.com.au'>terry@ropetest.com.a</a></div>
                <div>Phone: <a href='tel:+61 (0) 426 628 073'>+61 (0) 426 628 073</a></div>
            </Col>

            <Col className='col-12 col-md-4'>
                <div><Link href='/tandc/privacy'>Privacy Policy</Link></div>
                <div><Link href='/tandc/terms'>Terms and Conditions</Link></div>
                <div><Link href='/tandc/contact'>Contact and Directions</Link></div>
            </Col>

        </Row>

    </Container>
  );
}
