import "./ItemListContainer.css"
import React from 'react'
export const ItemListContainer = ({hamburguesa, title})=>{
    return(
        <div className="contenedor">
            {hamburguesa} - {title}
        </div>
    )
}