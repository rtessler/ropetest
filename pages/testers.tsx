import React, { useState } from 'react'
import styles from '@/styles/Testers.module.css'
import pageText from '@/config/text'
import { Container, Card, Row, Col } from "react-bootstrap"
import { Carousel } from '@/components/carousel'
import localFont from 'next/font/local'

const oxygenBold = localFont({ src: '../assets/fonts/oxygen-bold.ttf' })
const sans = localFont({ src: '../assets/fonts/SourceSansPro-Regular.ttf' })

interface Props {

}

const Testers: React.FC = ({  }: Props) => {

    const items = [
        {id: 'r28', image: '/assets/images/testers/R28-1024x974-1.webp',  title: pageText.testers.R28Title, text: pageText.testers.R28Text},
        {id: 'u28', image: '/assets/images/testers/U28-2.webp', title: pageText.testers.U28Title, text: pageText.testers.U28Text},
        {id: 'r58', image: '/assets/images/testers/R58-2.webp',title: pageText.testers.R58Title, text: pageText.testers.R58Text},
        {id: 'u58', image: '/assets/images/testers/ropesys_U58.webp',title: pageText.testers.U58Title, text: pageText.testers.U58Text},
        {id: 'r83', image: '/assets/images/testers/ropesys_R83.webp',title: pageText.testers.R83Title, text: pageText.testers.R83Text},
        {id: 'u83', image: '/assets/images/testers/ropesys_U58_front.webp',title: pageText.testers.U83Title, text: pageText.testers.U83Text},
    ]

    const carouselImages =  [
        { path: 'assets/images/testers/carousel/R140_Wuerzburg-2.webp', alt: 'R140_Wuerzburg-2'},
        { path: 'assets/images/testers/carousel/Pruefgeraete-2.webp', alt: 'Pruefgeraete-2'},
        { path: 'assets/images/testers/carousel/Alpspitzbahn-1.webp', alt: 'Alpspitzbahn-1'},
        { path: 'assets/images/testers/carousel/Erfurt_R58-3.webp', alt: 'Erfurt_R58-3'},
    ]


    return (<div className='devices' >
        
        <Container fluid className='pt-5 pb-5 section section-grey'>

            {
                items.map((item,index) => {
                    return <Row id={item.id} className='gx-0' key={index}>
                        <Col className='col-auto mb-3 bg-white d-flex justify-content-center align-items-center' style={{width: 357}}>
                            <img className={styles.image } decoding='async' loading='lazy' src={item.image} />
                        </Col>
                        <Col className={sans.className + ' bg-white mb-3 p-4 d-flex align-items-center'}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>

                        </Col>
                    </Row>
                })
            }

        </Container>

        <Carousel images={ carouselImages } />

        </div>)
}

export default Testers;
