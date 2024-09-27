
import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {

  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
      <Link to="/" 
      className='self-center 
      whitespace-nowrap 
      text-sm sm:text-xl 
      font-semibold 
      dark:text-white'
      >
        <span className='px-3 py-1 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 
        rounded-lg text-white'>React-pro</span>
        <span className='font-bold'>Vite</span>
      </Link>
      <form>
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={FaSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-9 lg:hidden' color='gray' pill>
        <FaSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-9 hidden sm:inline' color='gray' pill>
        <IoMoonSharp />
        </Button>

        <Link to='/sing-in'>
        <Button gradientDuoTone='purpleToBlue' outline >
          Sing In
        </Button>
        </Link>
        <Navbar.Toggle />
      </div> 

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={'div'}>
        <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header