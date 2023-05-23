import React from "react";
import About from "../assets/About";
export default function Header(){
    return(
    <header>
        <h2>Vehicle Reseller</h2>
        <div className="buttons">
            <a href="">About us</a>
           
            <a href="">Shop</a>
            <a href="">Contact us</a>
            <a href=""> Login</a>
            
        </div>
    </header>
    )
}