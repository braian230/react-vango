import Carrito from '../../assets/carrito.png';
import React from 'react';
export const CartWidget = ()=>{
    return(
        <div>
            <img src={Carrito} alt="pendiente" style={{width:20}}/>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>2</span>
        </div>
    )
}