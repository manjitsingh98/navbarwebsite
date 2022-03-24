import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <NavLink activeClassName="active" to="/Home">Home</NavLink>
                <NavLink activeClassName="active" to="/About">About</NavLink>
                <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
            </header>

        </>
    )
}

export default Navbar;
