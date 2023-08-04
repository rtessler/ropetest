import Link from 'next/link'
import { useEffect, useRef,  useState } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MobileNavbar from './MobileNavbar';
import navbarItems from './NavbarItems'

import { HiChevronDown } from "react-icons/hi";

// see: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar

const Navbar = () => {

    const [active, setActive ] = useState<number | null>(null)

    const navbarRef = useRef<HTMLDivElement>(null);

    const [dropDownOffset, setDropDownOffset] = useState<number>(28)

    const showDropdown = (e: any) => { 
    
        if (navbarRef.current) {
            const height = navbarRef.current.clientHeight

            const offset = height !== 100 ? 18 : 32
            setDropDownOffset(offset)
        }
    }

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.rt-navbar', {
            scrollTrigger: {
              trigger: '.rt-navbar',
              scrub: true,
              //markers: true,
              start: "+=100",
              end: "+=300px",
            },
            height: '78px',
            duration: 1
          })

          gsap.to('.rt-navbar-brand', {
            scrollTrigger: {
              trigger: '.rt-navbar',
              scrub: true,
              start: "+=100",
              end: "+=300px",
            },
            fontSize: '1.5rem',
            duration: 1
          })
    }, [])
    

//font-family: Arial, Helvetica, sans-serif;
    return (
        <div ref={navbarRef} className='rt-navbar'>

            <div className='container'>

                <Link className='rt-navbar-brand' href="/" onClick={() => setActive(null)}>ROPETEST</Link>

                <MobileNavbar />

                <div className='d-none d-lg-flex container'>

                    {
                        navbarItems.map(item => {

                            return item.link ? 
                                <Link href={item.link} key={item.id} className={ active === item.id ? 'active' : ''} onClick={() => setActive(item.id)}>{item.title}</Link>
                                :
                                <div className="rt-dropdown" key={item.id}>
                                    <button  onMouseEnter={showDropdown} className={'rt-dropbtn ' + (active === item.id ? 'active' : '')}>{item.title}
                                        <HiChevronDown  />
                                    </button>
            
                                    <div className="rt-dropdown-content">
                                        <div className='rt-dropdown-spacer' style={{height: dropDownOffset}} />
                                        {item.items?.map((subitem, index) => <Link href={subitem.link} key={index} onClick={() => setActive(item.id)}>{subitem.title}</Link> )}
                                    </div>
                                </div> 
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar


/*
<div className="rt-dropdown">
<button className="rt-dropbtn" 
    onMouseEnter={showDropdown}>
        Pursue 
    <i className="fa fa-caret-down"></i>
</button>

<div className="rt-dropdown-content">
    <div className='rt-dropdown-spacer' style={{height: dropDownOffset}} />
    {pursue.map((item, index) => <Link href={item.link} key={index}>{item.title}</Link> )}
</div>
</div> 

<Link className='' href="/technology">Technology</Link>

<div className=" rt-dropdown">
<button className="rt-dropbtn" 
    onMouseEnter={showDropdown}>Rope Testers 
    <i className="fa fa-caret-down"></i>
</button>

<div className="rt-dropdown-content">
    <div className='rt-dropdown-spacer' style={{height: dropDownOffset}}/>
    { testers.map((item,index) => <Link key={index} href={"/testers/#" + item.link}>{item.title}</Link> )}
</div>
</div> 

<div className=" rt-dropdown">
<button className="rt-dropbtn" 
    onMouseEnter={showDropdown}>Application Areas 
    <i className="fa fa-caret-down"></i>
</button>

<div className="rt-dropdown-content">
    <div className='rt-dropdown-spacer' style={{height: dropDownOffset}}/>
    { applications.map((item,index) => <Link key={index} href={"/application/#" + item.link}>{item.title}</Link> )}
</div>
</div> 

<div className=" rt-dropdown">
<button className="rt-dropbtn" 
onMouseEnter={showDropdown}>Services
    <i className="fa fa-caret-down"></i>
</button>

<div className="rt-dropdown-content">
    <div className='rt-dropdown-spacer' style={{height: dropDownOffset}}/>
    { services.map((item,index) => <Link key={index} href={"/services/#" + item.link}>{item.title}</Link> )}
</div>
</div> 

<Link className='' href="/training">Training</Link>
<Link className=''  href="/faq">FAQ</Link>
<Link className='' href="/download">Download</Link>
*/