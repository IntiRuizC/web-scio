import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoblanco from "../logos/Logo_SCIO_Letras_Blancas.svg";
import logocolor from "../logos/Logo_SCIO_Letras_Color.svg";
import "../styles/navbar.css";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#inicio",
            start: "top top+=50vh",
            end: "top+=100vh top",
            toggleClass: 
            {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod"], className: "in-home"},
            
        });

            ScrollTrigger.create({
                trigger: "#productos",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1100vh top",
                toggleClass: 
                {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod"], className: "in-productos"},
                
            });

            ScrollTrigger.create({
                trigger: "#clientes",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1100vh top",
                toggleClass:
                {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-clien"], className: "in-clientes"},
                
            });

            ScrollTrigger.create({
                trigger: "#nosotros",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1100vh top",
                toggleClass: 
                    {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-us"], className: "in-nosotros"},
            });

            ScrollTrigger.create({
                trigger: "#equipo",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1100vh top",
                toggleClass: 
                    {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-team"], className: "in-equipo"},
                
            });

            ScrollTrigger.create({
                trigger: "#contacto",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1100vh top",
                toggleClass: 
                    {targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-conta"], className: "in-contacto"}
                    
                
            });
        


        // Limpieza al desmontar
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="navbar">
            <div className="logo">
                <img className='logoblanco' src={logoblanco} alt="Scio/white" />
                <img className="logocolor" src={logocolor} alt="Scio/color" />
            </div>

            <div className="menu">
                <h4 id="menu-toggle">MENÚ</h4>
                <div className="list">
                    <ul className='ulvert'>
                        <li> <a href="#productos" className='nav-prod' > PRODUCTOS  </a> </li> 
                        <li> <a href="#clientes" className='nav-clien' >  CLIENTES </a> </li>
                        <li> <a href="#nosotros" className='nav-us' >  NOSOTROS </a> </li>
                        <li> <a href="#equipo" className='nav-team' >  EQUIPO </a> </li>
                        <li> <a href="#contacto" className='nav-conta' >  CONTACTO </a> </li>
                    </ul>
                    <ul className='ulhor'>
                        <li>VISUALIZACIONES</li>
                        <li>BLOG</li>
                        <li>PORTAFOLIO</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;