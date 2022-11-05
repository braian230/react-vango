import { useContext, useState } from 'react';
import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item})=>{
    const [contador, setContador] = useState(0);
    const {addProduct} = useContext(CartContext);
    
    const agregarProducto = (quantity, variable1)=>{
        setContador(variable1);
        addProduct(item, quantity);
    
    }

    const mostrarTexto = ()=>{

    }


    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>Detalle de el producto</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <p>productos agregados: {contador}</p>
            <ItemCount stock={10} initial={1} onAdd={agregarProducto} showText={mostrarTexto}/>
        </div>
    )
}