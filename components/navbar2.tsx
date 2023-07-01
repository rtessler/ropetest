import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'components/navbar2.module.css';


import { useEffect, useRef,  useState, MouseEventHandler, MouseEvent } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const NavBar = () => {

    const [currentDropdownId, setCurrentDropdownId] = useState<string | null>(null)

    const showDropdown = (e: any) => { 
        setCurrentDropdownId(e.target.id) 
    }

    const hideDropdown = (e: any) => { 
        setCurrentDropdownId(null) 
    }

    const devices = [
        {title: 'R28', link: 'r28'},
        {title: 'U28', link: 'u28'},
        {title: 'R58', link: 'r58'},
        {title: 'U58', link: 'u58'},
        {title: 'R83', link: 'r83'},
        {title: 'U83', link: 'u83'}
        ]
    
        const applications = [
            {title: 'Cable Car', link: 'cable-car'},
            {title: 'Cranes', link: 'cranes'},
            {title: 'Offshore', link: 'offshore'},
            {title: 'Amusement Facilities', link: 'amusement'},
            {title: 'Ship Lifts', link: 'ship-lifts'},
            {title: 'Stacker Cranes', link: 'stacker-cranes'},
            {title: 'Cable Structures', link: 'cable-structures'},
            {title: 'Mine Shafts and Hoists', link: 'mine-shafts-and-hoists'},
            {title: 'Elevators', link: 'elevators'},
            {title: 'Construction Machinery', link: 'construction-machinery'},
            {title: 'Fibre Rope Applications', link: 'fibre-rope-applications'},
        ]
    
        const services = [
            {title: 'Development Design and Construction', link: 'development'},
            {title: 'Repair', link: 'repair'},
            {title: 'Spare Parts', link: 'spare-parts'},
            {title: 'Rope Inspection', link: 'inspection'},
            {title: 'Calibration', link: 'calibration'}
        ]

        useEffect(() => {

            // gsap.registerPlugin(ScrollTrigger)
    
            // gsap.to('.rt-nav', {
            //     scrollTrigger: {
            //       trigger: '.rt-nav',
            //       scrub: true,
            //       //markers: true,
            //       start: "+=100",
            //       end: "+=300px",
            //     },
            //     height: '78px',
            //     duration: 1
            //   })
    
            //   gsap.to('.navbar-brand', {
            //     scrollTrigger: {
            //       trigger: '.rt-nav',
            //       scrub: true,
            //       //markers: true,
            //       start: "+=100",
            //       end: "+=300px",
            //     },
            //     fontSize: '1.5rem',
            //     duration: 1
            //   })
        }, [])

        return (
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            {/* <nav className={styles.navbar + ' rt-nav navbar navbar-expand-lg bg-body-tertiary'}></nav> */}
                <div className="container-fluid">

                    <div className="navbar-brand"><Link href="/">ROPETEST</Link></div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li key='pursue' className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                    href="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    >
                                    Pursue
                                </a>

                                <ul className="dropdown-menu">
                                    <li key='action'><Link className="dropdown-item" href="/pursue/aboutus">Action</Link></li>
                                    <li key='person'><Link className="dropdown-item" href="/pursue/contactperson">Contact Person</Link></li>
                                    {/* <li><hr className="dropdown-divider"></li> */}
                                    <li key='new'><Link className="dropdown-item" href="/pursue/new">News</Link></li>
                                    <li key='contact'><Link className="dropdown-item" href="/pursue/contact">Contact</Link></li>
                                </ul>
                            </li>

                            {/* <li key='technology' className="nav-item">
                                <Link className="nav-link" href="/technology">Technology</Link>
                            </li>

                            <li key='devices' className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                    href="#" role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>
                                    Rope Testing Device
                                </a>
                        
                                <ul className="dropdown-menu">
                                    { devices.map((item,index) => <li><Link key={index} href='/devices/#{item.link}'>{item.title}</Link></li> )}
                                </ul>

                            </li>

                            <li key='applications' className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                    href="#" role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>
                                    Application Areas
                                </a>
                        
                                <ul className="dropdown-menu">
                                    { applications.map((item,index) => <li><Link key={index} href='/devices/#{item.link}'>{item.title}</Link></li> )}
                                </ul>

                            </li>

                            <li key='services' className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                    href="#" role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>
                                    Services
                                </a>
                        
                                <ul className="dropdown-menu">
                                    { services.map((item,index) => <li><Link key={index} href='/devices/#{item.link}'>{item.title}</Link></li> )}
                                </ul>

                            </li>

                            <li key='training' className="nav-item">
                                <Link className="nav-link" href="/training">Training</Link>
                            </li>

                            <li key='faq' className="nav-item">
                                <Link className="nav-link" href="/faq">FAQ</Link>
                            </li>

                            <li key='download' className="nav-item">
                                <Link className="nav-link" href="/download">Download</Link>
                            </li> */}

                        </ul>

                </div>
            </div>
        </nav>)
}

export default NavBar