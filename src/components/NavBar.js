import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="nav">
            <li><a href="#">FOOD</a></li>
            <li><a href="#">DRINKS</a></li>
            <CartWidget/>
        </nav>
    )
}

export default NavBar





