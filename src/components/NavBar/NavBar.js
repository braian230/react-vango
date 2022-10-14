import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import pendiente from '../../../assets/pendiente.png';
import {Link, NavLink} from "react-router-dom";

export const NavBar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <img className="nav-brand" src={pendiente} alt="logo"/>
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/camisas">Aros y pendientes</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/zapatos">Complementos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/pantalones">Textil</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}