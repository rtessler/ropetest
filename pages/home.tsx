import { useEffect, useRef } from 'react'
import { IconType } from 'react-icons'

import { Container, Card, Row, Col } from "react-bootstrap"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

// styles

import styles from '@/styles/Home.module.css'
import homeStyle from './home.module.scss'

// icons

import { MdOutlineThumbUpAlt } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { LuLightbulb } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import HomeCard from '@/components/home-card'

// gsap

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import pageText from '@/config/text'

import { Carousel } from '@/components/carousel'

const oxygenBold = localFont({ src: '../assets/fonts/oxygen-bold.ttf' })
const sans = localFont({ src: '../assets/fonts/SourceSansPro-Regular.ttf' })

export default function Home() {

  const triggerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const card1IconRef = useRef<IconType>(null);
  const card2IconRef = useRef<any>(null);
  const card3IconRef = useRef<any>(null);
  const card4IconRef = useRef<any>(null);

  const companyName = 'Ropetest'

  //ROPESYS GmbH

  const carouselImages =  [
        { path: 'assets/images/Koblenz_SMART_R58.webp', alt: 'koblenz'},
        { path: 'assets/images/ROPESYS-Seilpruefgeraet-4-1-1.webp', alt: 'seilpruegeraet'},
        { path: 'assets/images/4-1024x768-1.webp', alt: 'steel rope'},
        { path: 'assets/images/Tagebau_R58-1.webp', alt: 'tagebau'},
    ]
    

  useEffect(() => {

      // don't forget to register plugins

      gsap.registerPlugin(ScrollTrigger)
      
      parallax()
      moveAndFadeIn()
  }, [])

  const parallax = () => {

    // scale banner image on load

    gsap.to(parallaxRef.current, {duration: 1, scale: 1.05})
    // gsap.to('.react-parallax-bgimage', {duration: 1, scale: 1.05})

    // move text left and up on load

    gsap.to('.text-anim', {duration: 1, x: -10, y: -10})

    // parallax effect

    gsap.to(parallaxRef.current, {
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: '+=1px',   // dont start immediatley
        scrub: true,
      },
      yPercent: '30'
    })
  }

  const moveAndFadeIn = () => {
    gsap.to('.fade-in', {
      scrollTrigger: {
        trigger: '.trigger',
        // start: "top bottom",
        // toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: function(index, target, list) {
        // your custom logic here. Return the delay from the start (not between each)
        return index
      }
    })

    gsap.to('.circle-trigger-1', 
        { scrollTrigger: {
            trigger: '.circle-trigger-1'
         },
         opacity: 1,
         duration: 3,
         ease: 'ease-out'
    })

    gsap.to('.circle-trigger-2', 
    { scrollTrigger: {
        trigger: '.circle-trigger-2'
     },
     opacity: 1,
     duration: 3,
     ease: 'ease-out'
})

//     gsap.from(card2IconRef.current, {
//         scrollTrigger: {trigger: card2IconRef.current}, opacity: 0, duration: 0.5
//     })
//     gsap.from(card3IconRef.current, {
//         scrollTrigger: {trigger: card2IconRef.current}, opacity: 0, duration: 0.5
//     })
//     gsap.from(card4IconRef.current, {
//         scrollTrigger: {trigger: card2IconRef.current}, opacity: 0, duration: 0.5
//     })
  }

  const Banner = () => {
    return  (
      <div className={styles.parallaxOuter}>

          <div ref={parallaxRef} className={styles.parallaxInner + ' ' + homeStyle.home }>
            <Container>
              <Row>
                <Col xs={1}></Col>

                <Col className='text-anim' xs="12" md="6">
                  <h1 className={oxygenBold.className}>{pageText.home.yourSpecialist}</h1>
                  <h2 className={oxygenBold.className}>{pageText.home.ropetest}</h2>
                  <p>{pageText.home.theTechnology}</p>
                </Col>

                <Col></Col>

              </Row>
            </Container>
          </div>
      </div>
      )
  }

  const Section1 = () => {
    return (
    <Container fluid className={'pt-5 pb-5 section section-grey'}>

      <Row>
        <Col className='col-12 col-md-6' >
          <HomeCard title="application areas" paragraphs={pageText.home.card1} >
            <div className={styles.circle + ' circle-trigger-1'}>
              <MdOutlineThumbUpAlt className='card-icon-1' size="2em" />
            </div>
          </HomeCard>
        </Col>

        <Col className='col-12 col-md-6'>
          <HomeCard title="technology" paragraphs={pageText.home.card2} >
            <div className={styles.circle + ' circle-trigger-1'}>
              <LuLightbulb size="2em"/>
            </div>
          </HomeCard>
        </Col>
      </Row>

      <Row>
        <Col className='col-12 col-md-6'>
          <HomeCard title="training" paragraphs={pageText.home.card3} >
            <div className={styles.circle + ' circle-trigger-2'}>
              <GoComment size="2em" />
            </div>
          </HomeCard>
        </Col>

        <Col className='col-12 col-md-6'>
          <HomeCard title="rope testers" paragraphs={pageText.home.card4} >
            <div className={styles.circle + ' circle-trigger-2'}>
              <FaUserGraduate size="2em" />
            </div>
          </HomeCard>
        </Col>
      </Row>

  </Container>)
  }

  const Section2 = () => {
    return (<Container fluid className={'pt-5 pb-5 trigger section section-white'}>

        <div className='row'>

          <div ref={triggerRef} className='col'>
              <h3 className={sans.className + ' ' + styles.fadeStart + ' fade-in '}>{pageText.home.section2.header}</h3>
              <p className={ styles.fadeStart + ' fade-in '}>{pageText.home.section2.text}</p>
          </div>
          
          <div className='col'>
            <img style={{width: 400, height: 400}} src='assets/images/ropesys_R58_small.webp' alt='steel rope' />
          </div>

        </div>

    </Container>)
  }

  return (
    <div className={homeStyle.home}>
      <Head>
        <title>Home - Ropetest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Section1 />
      <Section2 />
      <Carousel images={ carouselImages } />

    </div>
  )
}
