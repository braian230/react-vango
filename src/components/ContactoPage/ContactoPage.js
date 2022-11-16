import { useEffect, useState } from "react";
import React from "react";
export const ContactoPage = ()=>{
    const [isMobile,setIsMobile] = useState(false);

    const hacerClick = (event)=>{
        console.log("hiciste clic", event)
    }


    useEffect(()=>{
        const verificarResolucion = ()=>{
            console.log(window.innerWidth);
            if(window.innerWidth<320){
                setIsMobile(true);
            } else{
                setIsMobile(false)
            }
        }
        window.addEventListener("load",verificarResolucion);
        return ()=>{
            window.removeEventListener("load", verificarResolucion);
        }
    },[])

    return(
        <div style={{background:"pink", height:"200px", fontSize:"40px"}}>
            <h2 onClick={hacerClick}>Chatea con nosotros</h2>
            {
                isMobile === true ?
                <p>soy un elemento de mobile</p>
                :
                <p>soy una laptop</p>
            }
        </div>
    )
}