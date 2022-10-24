import { CartWidget } from "../CartWidget/CartWidget"
import './Navbar.css';
import pendiente from '../../assets/pendiente.png';
import {Link, NavLink} from "react-router-dom";
import React from 'react';

export const NavBar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <img className="nav-brand" src={pendiente} alt="logo"/>
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/ejemplo-contexto">Contexto</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/bijou">Aros y pendientes</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/complementos">Complementos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/textil">Textil</NavLink>
            
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}