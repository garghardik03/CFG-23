
'use client';

import { AuthContext } from '@/context/AuthProvider';
import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react'
import { Dropdown } from 'flowbite-react';
import { useRouter } from 'next/router';


const Nav = () => {
  const router = useRouter()
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <Navbar
    fluid
    rounded
    className='sticky top-0'
  >
    <Navbar.Brand href="/">
      {/* <img
        alt="Flowbite React Logo"
        className="mr-3 h-6 sm:h-9"
        src="/favicon.svg"
      /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
        Navsanjeevan Trust
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button onClick={()=>router.push("/Donate")}>
       {isLoggedIn?"Logout" :"Donate Us"}
      </Button>
      <Navbar.Toggle />
    </div>
{ !isLoggedIn &&  <Navbar.Collapse>
      <Navbar.Link
        active
        href="/"
      >
        <p>
          Home
        </p>
      </Navbar.Link>
      <Navbar.Link href="/#About">
        About
      </Navbar.Link>
      <Navbar.Link href="/#Programmes">
        Programmes
      </Navbar.Link>
      <Navbar.Link href="/#Testinomial">
        Testinomials
      </Navbar.Link>
      <Navbar.Link >
      <Dropdown
          inline
          label="Get Involved"
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Connect with us
            </span>
          </Dropdown.Header>
          <Dropdown.Item  onClick={()=>router.push("/BeActivist")}>
            Be a Activist
          </Dropdown.Item>
          <Dropdown.Item  onClick={()=>router.push("/BeVolunteer")}>
            Be a Volunteer
          </Dropdown.Item>
          <Dropdown.Item  onClick={()=>router.push("/BeDonor")}>
            Recommend Someone
          </Dropdown.Item>
        </Dropdown>

      </Navbar.Link>
      {/* <CustomTriggerDropdown/> */}
      <Navbar.Link href="/Virtual">
        Virtual Trainings
      </Navbar.Link>
      <Navbar.Link href="/login">
        Login
      </Navbar.Link>
      {/* <CustomTriggerDropdown/> */}
    </Navbar.Collapse>}
  </Navbar>
    
  )
}



export default Nav