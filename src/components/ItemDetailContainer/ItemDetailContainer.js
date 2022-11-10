import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from ".././baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import React from 'react';
import {db} from "../../utils/firebase";
import {doc,getDoc } from "firebase/firestore";
// /item/id
export const ItemDetailContainer = ()=>{
    const {id} = useParams(); //{id:"8"}
    const [itemProduct, setItemProduct] = useState({});

  

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
    },[id])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>Selecionar producto</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}