import {useState} from "react";
import React from "react";

export const EventosDefault = ()=>{
    const [statusForm, setStatusForm] = useState("");

    const sendForm = (event)=>{
        event.preventDefault();
        console.log("formulario enviado")
        setStatusForm("formulario enviado")
    }

    return(
        <div>
            <h3>Contactanos de manera muy simple</h3>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="Nombre completo"/>
                <input type="text" placeholder="Correo electronico"/>
                <input type="text" placeholder="Numero de telefono"/>
                <input type="text" placeholder="Documento de identidad"/>
                
                <button type="submit">Enviar</button>
            </form>
            <h1>{statusForm}</h1>
        </div>
    )}
