/* eslint-disable react-hooks/exhaustive-deps */
 // eslint-disable-next-line
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc,getDocs,limit, query, where} from "firebase/firestore";
import React from 'react';
export const ItemListContainer = ()=>{
    useEffect(()=>{
        const getData = async()=>{
            //referencia del punto de acceso de info
            const queryRef = query (collection ( "items"), where("category","==", categoryId));
            //obt todos los doc de la coleccion de items
            const response = await getDocs(queryRef);
            console.log(response);
            const documents = response.docs;
            //contenido de un doc
            console.log("contenido", documents[0].data());
            console.log("id doc", documents[0].id);
            const newDoc = {
                ...documents[0].data(),
                id:documents[0].id
            }
            console.log(newDoc)
        }
        getData();
    })
    const {categoryId} = useParams();
    console.log(useParams());
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })
   
    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryId){
                
                const productsFiltered = response.filter(elm=>elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else{
              
                setProductos(response)
            }
        })
    },[categoryId])

    console.log("productos", productos);
    return(
        <div className="item-list-container">
            <h1>Vango accesorios</h1>
            <ItemList items={productos} otraPropiedad={123}/>
        </div>
    )
}