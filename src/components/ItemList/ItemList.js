import { Item } from "../Item/Item"
import './ItemList.css';
import React from 'react';

export const ItemList = ({items, otraPropiedad})=>{


    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>Productos destacados</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}