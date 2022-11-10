import Carrito from '../../assets/carrito.png';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
export const CartWidget = ()=>{
    const {getTotalProducts} = useContext(CartContext);
    
        return(
        <div>
            <img src={Carrito} alt="carrito" style={{heigth:"2px",width:"2px"}}/>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>{getTotalProducts()}</span>
        </div>
    )
}