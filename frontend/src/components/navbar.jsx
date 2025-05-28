import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoblanco from "../logos/Logo_SCIO_Letras_Blancas.svg";
import logocolor from "../logos/Logo_SCIO_Letras_Color.svg";
import "../styles/navbar.css";

gsap.registerPlugin(ScrollTrigger);

const NavBar = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para el ancho de la ventana

    // Detectar cambios en el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Actualiza el estado con el nuevo ancho de la ventana
        };

        window.addEventListener('resize', handleResize); // Escuchar los cambios de tamaño de ventana
        return () => {
            window.removeEventListener('resize', handleResize); // Limpiar el evento cuando el componente se desmonte
        };
    }, []);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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

    return (
        <div className="navbar">
            <div className="logo">
                <img className='logoblanco' src={logoblanco} alt="Scio/white" />
                <img className="logocolor" src={logocolor} alt="Scio/color" />
            </div>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                {/* Solo aplicar el evento toggle si el ancho de la ventana es menor a 1000px */}
                {windowWidth < 1000 && (
                    <>
                    <h4 id="menu-toggle" onClick={toggleMenu}> MENÚ </h4>
                    <h4 id="menu-prod" onClick={toggleMenu}> PRODUCTOS </h4>
                    <h4 id="menu-clie" onClick={toggleMenu}> CLIENTES </h4>
                    <h4 id="menu-nos" onClick={toggleMenu}> NOSOTROS </h4>
                    <h4 id="menu-equi" onClick={toggleMenu}> EQUIPO </h4>
                    <h4 id="menu-cont" onClick={toggleMenu}> CONTACTO </h4>
                    </>
                    
                )}
                <div className={`list ${menuOpen ? 'open' : ''}`}>
                    <ul className={`ulvert ${menuOpen ? 'open' : ''}`}>
                        <li> <a href="#productos" className='nav-prod'
                            onClick={windowWidth < 1000 ? toggleMenu : null}> PRODUCTOS  </a> </li>
                        <li> <a href="#clientes" className='nav-clien'
                            onClick={windowWidth < 1000 ? toggleMenu : null}>  CLIENTES </a> </li>
                        <li> <a href="#nosotros" className='nav-us'
                            onClick={windowWidth < 1000 ? toggleMenu : null}>  NOSOTROS </a> </li>
                        <li> <a href="#equipo" className='nav-team'
                            onClick={windowWidth < 1000 ? toggleMenu : null}>  EQUIPO </a> </li>
                        <li> <a href="#contacto" className='nav-conta'
                            onClick={windowWidth < 1000 ? toggleMenu : null}>  CONTACTO </a> </li>
                    </ul>
                    <ul className={`ulhor ${menuOpen ? 'open' : ''}`}>
                        {/* <li>VISUALIZACIONES</li>
                        <li>BLOG</li> */}
                        <li>PORTAFOLIO</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
