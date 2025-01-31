import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoblanco from "../logos/Logo_SCIO_Letras_Blancas.svg"
import logocolor from "../logos/Logo_SCIO_Letras_Color.svg"
import "../styles/navbar.css"

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {

    useEffect(() => {
    
        let tlmenu = gsap.timeline({
            scrollTrigger: {
                trigger: ".navbar",
                start: "top top",
                end: "100 0", 
                scrub: 2,
            }
        });
        
        if (window.innerWidth >= 1024) {     // para el diseño de PC's
                
                tlmenu.fromTo(".ulvert, .ulhor", {color: "white"}, {color: "#333333"})
            } else {
                tlmenu.fromTo(".menu", {backgroundColor: "white"}, {backgroundColor: "#036E7C", color: "white"})
            }

        //por qué dioh mío, me hiciste tan perfecto?? por qué señor, no me diste algún defecto?? 🎶🕺 
        tlmenu.fromTo(".logoblanco", {opacity: "1"}, {opacity: "0"}, "-=1")
        tlmenu.fromTo(".logocolor", {opacity: "0"}, {opacity: "1"}, "-=1")

    
    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    }, []);
    

    
    return (
    <>
    <div className="navbar">
        <div className="logo">
            <img className='logoblanco' src={logoblanco} alt="Scio/white" />
            <img className="logocolor" src={logocolor} alt="Scio/color" />
        </div>

        <div className="menu">
            <h4 id="menu-toggle">MENÚ</h4>
            <div className="list">
                <ul className='ulvert'>
                    <li>PRODUCTOS</li> 
                    <li>CLIENTES</li>
                    <li>NOSOTROS</li>
                    <li>EQUIPO</li>
                    <li>CONTACTO</li>
                </ul>
                <ul className='ulhor'>
                    <li>VISUALIZACIONES</li>
                    <li>BLOG</li>
                    <li>PORTAFOLIO</li>
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default NavBar;