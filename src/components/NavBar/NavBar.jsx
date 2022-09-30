import Button from 'react-bootstrap/Button';
import ImagenLogo from "../../assets/logo.jpg";
import CartWidget from '../CartWidget/CardWidget';

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