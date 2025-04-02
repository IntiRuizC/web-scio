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
            end: "+=20vh top",
            toggleClass:
                { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod"], className: "in-home" }
        });
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // useEffect(() => {
    //     ScrollTrigger.create({
    //         trigger: ".producto-1",
    //         start: "top+=825vh top",
    //         end: "top+=2500vh top",
    //         toggleClass:
    //             { targets: [".nav-conta"], className: "nav-black" },
    //     });

    //     ScrollTrigger.create({
    //         trigger: ".producto-1",
    //         scrub: 2,
    //         start: "top+=900vh top",
    //         end: "top+=2500vh top",
    //         toggleClass:
    //             { targets: [".nav-team"], className: "nav-black" },
    //     });

    //     ScrollTrigger.create({
    //         trigger: ".producto-1",
    //         start: "top+=1000vh top",
    //         end: "top+=2500vh top",
    //         toggleClass:
    //             { targets: [".nav-us"], className: "nav-black" },
    //     });

    //     ScrollTrigger.create({
    //         trigger: ".producto-1",
    //         start: "top+=1100vh top",
    //         end: "top+=2500vh top",
    //         toggleClass:
    //             { targets: [".nav-clien"], className: "nav-black" },
    //     })
        
    //     ScrollTrigger.create({
    //         trigger: ".producto-1",
    //         start: "top+=1300vh top",
    //         end: "top+=2400vh top",
    //         toggleClass:
    //         { targets: [".nav-prod"], className: "prod-navpos" }
    //     });;

    //     return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // }, []);


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