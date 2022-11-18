/* eslint-disable react-hooks/exhaustive-deps */
 // eslint-disable-next-line
import { useEffect, useState} from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection,getDocs,query, where} from "firebase/firestore";
import React from 'react';
import {db} from '../../utils/firebase';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import EmojiNature from "@mui/icons-material/EmojiNature";
export const ItemListContainer = ()=>{

    const {categoryId} = useParams();
    console.log(useParams());
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
 

    useEffect(()=>{
        const queryRef = categoryId? query(collection(db, "productos"), where("categoria","==",categoryId)) : collection(db,"productos");
        getDocs(queryRef).then((response)=>{
                
            const results = response.docs;
            const docs = results.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            });
            setProductos(docs);
            setLoading(false);
        });
    },[categoryId])

    return(
        <div className="item-list-container">
            <EmojiNature/>
            <h1>Vango accesorios</h1>
    
            {loading ? <p>Espera mientras carga...</p>
                :
            <ItemList items={productos} otraPropiedad={123}/>
            }
            
        </div>
    )
}