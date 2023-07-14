import { useState } from 'react'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
import styles from './MobileNavbar.module.css';

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import navbarItems from './NavbarItems'

export default function MobileNavbar() {

  const [isOpen, setIsOpen] = useState(false)

  function onClick() {
    setIsOpen(state => !state)
  }

  function showMenu() {
    return (
      <div className={styles.menu}>

        <Accordion defaultActiveKey="110">
        {
          navbarItems.map(item => {

            return item.link ?
              <Accordion.Item eventKey={item.id.toString()} className='accordion-hide-carot' key={item.id}>
                <Accordion.Header><Link href={item.link}>{item.title}</Link></Accordion.Header>
              </Accordion.Item>

            :

              <Accordion.Item eventKey={item.id.toString()} key={item.id.toString()}>
                <Accordion.Header>{item.title}</Accordion.Header>

                  <Accordion.Body>
                    {
                      item.items?.map(subitem => <div key={subitem.title}><Link href={subitem.link}>{subitem.title}</Link></div>)
                    }
                  </Accordion.Body>

              </Accordion.Item>
          })
        }

        </Accordion>
    </div>)
  }

  return (
      <div className='d-lg-none rt-mobile-container d-flex flex-column'>
        <div className=' d-flex justify-content-end align-items-center'>
            {
              isOpen ?
                <IoCloseOutline className={styles.menuIcon} onClick={onClick} />
                :
                <HiOutlineBars3 className={styles.menuIcon} onClick={onClick} />     
            }

            { isOpen && showMenu() }
        </div>
      </div>
  )
}
