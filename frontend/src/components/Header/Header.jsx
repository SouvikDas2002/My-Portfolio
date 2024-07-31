import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';
import { Home, Message, Telegram } from '@mui/icons-material';
import Data from './../../utils/Data'
import Button from '../Button/Button';
import './Header.css'

const Header = (props) => {
  const pathname=props?.loaction?.pathname
  return (
    <Navbar expand="lg" sticky='top' className="header top_60">
      <Nav.Link as={NavLink} to="/resume">
      <Navbar.Brand className='header_home'>
        <Home/>
      </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to="/resume" className={pathname=="/resume"?"header_active":"header_link"}>Resume</Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" className={pathname=="/portfolio"?"header_active":"header_link"}>Portfolio</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={pathname=="/contact"?"header_active":"header_link"}>Contact</Nav.Link>
        </Nav>
        <Nav.Link as={NavLink} to="/contact">
        <div className='header_right'>
        <Button text={"Hire me"} icon={<Telegram/>}/>
        </div>
        </Nav.Link>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default  Header
