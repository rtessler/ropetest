import Link from 'next/link'
import styles from 'components/navbar.module.css';

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useRef,  useState, MouseEventHandler, MouseEvent } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const NavBar = () => {

    enum DropdownId {PURSUE, TESTERS, APPLICATIONS, SERVICES}

    const [currentDropdownId, setCurrentDropdownId] = useState<string | null>(null)

    const navbarRef = useRef<HTMLDivElement>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const [menuTopOffset, setMenuTopOffset] = useState<number>(78)

    const showDropdown = (e: any) => { 
        setCurrentDropdownId(e.target.id) 

        if (navbarRef.current) {
            const height = navbarRef.current.clientHeight
            console.log(height)
            console.log(e.target)

            //$('.dropdown-menu').css({ top: '200' + 'px' });

            setMenuTopOffset(height)

            // if (dropdownRef.current) {
            //     console.log('im here')
            //     // dropdownRef.current.style.display = 'relative'
            //     dropdownRef.current.style.top = '200px'
            // }

            // let dropdowns: any = document.getElementsByClassName('dropdown-menu')

            // if (dropdowns) {
            //     console.log(dropdowns.length)
            //     for (let element of dropdowns) {
            //         console.log(element)
            //         // element.top = height
            //         element.style.top = height
            //         element.display = 'absolute'
            //     }
            // }

        }
    }

    const hideDropdown = (e: any) => { setCurrentDropdownId(null) }

    const testers = [
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

        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.rt-nav', {
            scrollTrigger: {
              trigger: '.rt-nav',
              scrub: true,
              //markers: true,
              start: "+=100",
              end: "+=300px",
            },
            height: '78px',
            duration: 1
          })

          gsap.to('.navbar-brand', {
            scrollTrigger: {
              trigger: '.rt-nav',
              scrub: true,
              start: "+=100",
              end: "+=300px",
            },
            fontSize: '1.5rem',
            duration: 1
          })
    }, [])

//     const MenuContainer = styled("div")`
//   display: ${(p) => (p.show ? "flex" : "none")};
//   min-width: 150px;
//   position: absolute;
//   z-index: 1000;
//   flex-direction: column;
//   border: 1px solid #e5e5e5;
//   background-color: white;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
// `;

//     const Menu = ({ role: any }) => {
//         const { show, onClose, props } = useDropdownMenu({
//           flip: true,
//           offset: [0, 8],
//         });
//         return (
//           <MenuContainer {...props} role={role} show={show}>
//             <button
//               type="button"
//               onClick={onClose}
//               className="text-left hover:bg-brand-100 px-6 py-2"
//             >
//               Item 1
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="text-left hover:bg-brand-100 px-6 py-2"
//             >
//               Item 2
//             </button>
//           </MenuContainer>
//         );
//       };

    return (
        <Navbar ref={navbarRef} className={styles.navbar + ' rt-nav'} bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand className={styles.navbarBrand} as={Link} href="/">ROPETEST</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>

                        <NavDropdown title="Pursue" 
                            id={DropdownId.PURSUE.toString()}
                            show={currentDropdownId === DropdownId.PURSUE.toString()}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}>

                                    {/* <div ref={dropdownRef} className={styles.dropdownSpacer}></div> */}
                             
                                    <NavDropdown.Item as={Link} style={{top: menuTopOffset}}  href="/pursue/aboutus">About Us</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} style={{top: menuTopOffset}}  href="/pursue/contactperson">Contact Person</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} style={{top: menuTopOffset}}  href="/pursue/news">News</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} style={{top: menuTopOffset}}  href="/pursue/contact">Contact</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link as={Link} href="/technology">Technology</Nav.Link>

                        <NavDropdown title="Rope Testers" 
                                    id={DropdownId.TESTERS.toString()}
                                    show={currentDropdownId === DropdownId.TESTERS.toString()}
                                    onMouseEnter={showDropdown} 
                                    onMouseLeave={hideDropdown}>
                                { testers.map((item,index) => <NavDropdown.Item key={index} as={Link} href={"/testers/#" + item.link}>{item.title}</NavDropdown.Item> )}
                        </NavDropdown>

                        <NavDropdown title="Application Areas" 
                                id={DropdownId.APPLICATIONS.toString()}
                                show={currentDropdownId === DropdownId.APPLICATIONS.toString()}
                                onMouseEnter={showDropdown} 
                                onMouseLeave={hideDropdown}>

                            { applications.map((item,index) => <NavDropdown.Item key={index} as={Link} href={"/application/#" + item.link}>{item.title}</NavDropdown.Item> )}
                        </NavDropdown>

                        <NavDropdown title="Services" 
                            id={DropdownId.SERVICES.toString()}
                            show={currentDropdownId === DropdownId.SERVICES.toString()}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}>

                            { services.map((item,index) => <NavDropdown.Item key={index} as={Link} href={"/services/#"  + item.link}>{item.title}</NavDropdown.Item> )}
                        </NavDropdown>

                        <Nav.Link as={Link} href="/training">Training</Nav.Link>
                        <Nav.Link as={Link} href="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} href="/download">Download</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;