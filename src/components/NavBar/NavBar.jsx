import Button from 'react-bootstrap/Button';
import "./Navbar.css";
import ImagenLogo from "../../assets/logo.jpg"
import React from 'react';

import { CartWidget } from '../CartWiget/CartWidget';
export const NavBar = ()=>{

    return(
        <nav className='navegation'>
            <img className='logo' src={ImagenLogo} alt='logo'/>
            <ul className='list'>
                <li><a href='/'>NEW!</a></li>
                <li><a href='/'>Accesorios</a></li>
                <li><a href='/'>Complementos</a></li>
                <li><a href='/'>Textil</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}