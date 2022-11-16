/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useContext} from 'react';
import './ItemCount.css';
import React from 'react';
import { CartContext } from '../../context/CartContext';


export const ItemCount = ({stock, initial, onAdd, showText})=>{
    const value = useContext(CartContext);
    console.log("value", value);
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contenedorControles'>
                <button disabled={stock ===0} onClick={decrementar} className='botonControlbtn btn-dark btn-lg'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonControlbtn btn-dark btn-lg'>+</button>
            </div>
            <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
