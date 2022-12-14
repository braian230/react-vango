import { useState, useEffect } from "react";

import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import React from 'react';
import {db} from "../../utils/firebase";
import {doc,getDoc } from "firebase/firestore";
export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [itemProduct, setItemProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getProducto = async()=>{
          
            const queryRef = doc(db, "productos",id );
            const response =  await getDoc(queryRef);
            console.log(response);
            const newDoc ={ 
                ...response.data(),
                id:response.id
            }
            setItemProduct(newDoc)
        }
        getProducto();
        setLoading(false);
    },[id])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>Producto selecionado</p>
            {loading? <p>Cargando detalles de compra</p>
             :   <ItemDetail item={itemProduct}/>}
        </div>
    )
}