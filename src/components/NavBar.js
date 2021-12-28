import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="nav">
            <li><a href="./app.js">FOOD</a></li>
            <li><a href="./app.js">DRINKS</a></li>
            <CartWidget/>
        </nav>
    )
}

export default NavBar





