import React from "react";
import preloadedImg from "../../../image/Icon/Preloader/Preloader.svg"



export const Preloader = () =>{
    return (
        <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={preloadedImg} alt="preloadedImg"/>
        </div>
    )
}