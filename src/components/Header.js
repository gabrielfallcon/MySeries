import React, { useState } from 'react'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <Navbar  expand='md'>
            <NavbarBrand tag={Link} to='/'><h2>Minhas series</h2></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className='ml-auto'>
                    <NavItem >
                        <NavLink className='text-white' tag={Link} to='/genres'>Gêneros</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header