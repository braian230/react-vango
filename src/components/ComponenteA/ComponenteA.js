import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import React from "react";
export const ComponenteA = () => {
    const value = useContext(ThemeContext);
    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid red"}}>
            <p>Componente A</p>
            <p>{value.backgroundTheme}</p>
        </div>
    )
}