import React from "react";
import preloadedImg from "../../../image/Icon/Preloader/Preloader.svg"



export const Preloader = () =>{
    return (
        <div>
            <div style={{width:"100%", minWidth:'50px', height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={preloadedImg} alt="preloadedImg"/>
            </div>
        </div>
    )
}