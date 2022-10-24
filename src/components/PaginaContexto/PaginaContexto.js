import { ThemeContext } from "../../context/ThemeContext";
import React from "react";
import { UsersContext } from "../../context/UsersContext";
import { ComponenteA } from "../ComponenteA/ComponenteA";
import { ComponenteB } from "../ComponenteB/ComponenteB";


export const PaginaContexto = () => {
    const [curso, setCurso] = ("");
    return(
        <div>
        <p>pagina de contexto</p>
        <UsersContext.Provider value={{nombre:"Ariel", edad:"25", curso:curso, setCurso:setCurso}}>
        <ThemeContext.Provider value={{backgroundTheme:"blue", fontFamilyTheme:"Arial"}}>
            <ComponenteA/>
            <ComponenteB/>
        </ThemeContext.Provider>
     </UsersContext.Provider>
            
        </div>
    )

}