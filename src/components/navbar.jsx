import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoblanco from "../logos/Logo_SCIO_Letras_Blancas.svg"
import logocolor from "../logos/Logo_SCIO_Letras_Color.svg"
import "../styles/navbar.css"

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {

    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        
        let tlmenu = gsap.timeline({
            scrollTrigger: {
                trigger: ".navbar",
                start: "top top",
                end: "100 0", 
                scrub: 2,
            }
        });
        
        if (window.innerWidth >= 1024) {     
            tlmenu.fromTo(".ulvert, .ulhor", {color: "white"}, {color: "#333333"})
        } else {
            tlmenu.fromTo(".menu", {backgroundColor: "white"}, {backgroundColor: "#036E7C", color: "white"})
        }

        tlmenu.fromTo(".logoblanco", {opacity: "1"}, {opacity: "0"}, "-=1")
        tlmenu.fromTo(".logocolor", {opacity: "0"}, {opacity: "1"}, "-=1")


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            navbar.classList.remove("in-nosotros");
        }
    }, []);

    useEffect(() => {
        let triggerInstance;
        
        // Función para crear las animaciones condicionales
        const getAnimations = (isMobile = false, isDesktop = false) => {
            const tl = gsap.timeline();
            
            // Animaciones comunes para todos los casos
            tl.to(".logoblanco", { opacity: 1 })
            .to(".logocolor", { opacity: 0 }, "<");
    
            // Animaciones adicionales para mobile
            if (isMobile) {
                tl.to(".menu", { 
                    backgroundColor: "white", 
                    color: "#333" 
                }, "<");
            }
    
            // Animaciones adicionales para desktop
            if (isDesktop) {
                tl.to(".ulvert, .ulhor", { 
                    color: "white" 
                }, "<");
            }
            
            return tl;
        };
    
        // Configuración base del ScrollTrigger
        const createScrollTrigger = (isMobile, isDesktop) => {
            const config = {
                trigger: ".nosotros",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1150vh top",
                onEnter: () => getAnimations(isMobile, isDesktop).play(),
                onLeave: () => {
                    const tl = gsap.timeline()
                        .to(".logoblanco", { opacity: 0 })
                        .to(".logocolor", { opacity: 1 }, "<");
    
                    if (isMobile) {
                        tl.to(".menu", { 
                            backgroundColor: "#036E7C", 
                            color: "white" 
                        }, "<");
                    }
    
                    if (isDesktop) {
                        tl.to(".ulvert, .ulhor", { 
                            color: "rgb(51, 51, 51)" 
                        }, "<");
                    }
                },
                onEnterBack: () => getAnimations(isMobile, isDesktop).play(),
                onLeaveBack: () => {
                    const tl = gsap.timeline()
                        .to(".logoblanco", { opacity: 0 })
                        .to(".logocolor", { opacity: 1 }, "<");
    
                    if (isMobile) {
                        tl.to(".menu", { 
                            backgroundColor: "#036E7C", 
                            color: "white" 
                        }, "<");
                    }
    
                    if (isDesktop) {
                        tl.to(".ulvert, .ulhor", { 
                            color: "rgb(51, 51, 51)" 
                        }, "<");
                    }
                }
            };
    
            return ScrollTrigger.create(config);
        };

        const otherScrollTriguer = (isMobile, isDesktop) => {
            const config = {
                trigger: ".contacto-container",
                start: "top+=1200vh top+=50vh",
                end: "bottom+=1150vh top",
                onEnter: () => getAnimations(isMobile, isDesktop).play(),
                onLeave: () => {
                    const tl = gsap.timeline()
                        .to(".logoblanco", { opacity: 0 })
                        .to(".logocolor", { opacity: 1 }, "<");
    
                    if (isMobile) {
                        tl.to(".menu", { 
                            backgroundColor: "#036E7C", 
                            color: "white" 
                        }, "<");
                    }
    
                    if (isDesktop) {
                        tl.to(".ulvert, .ulhor", { 
                            color: "rgb(51, 51, 51)" 
                        }, "<");
                    }
                },
                onEnterBack: () => getAnimations(isMobile, isDesktop).play(),
                onLeaveBack: () => {
                    const tl = gsap.timeline()
                        .to(".logoblanco", { opacity: 0 })
                        .to(".logocolor", { opacity: 1 }, "<");
    
                    if (isMobile) {
                        tl.to(".menu", { 
                            backgroundColor: "#036E7C", 
                            color: "white" 
                        }, "<");
                    }
    
                    if (isDesktop) {
                        tl.to(".ulvert, .ulhor", { 
                            color: "rgb(51, 51, 51)" 
                        }, "<");
                    }
                }
            };
    
            return ScrollTrigger.create(config);
        };
    
        // Handler para resize con lógica centralizada
        const handleResize = () => {
            const isMobile = window.innerWidth < 1000;
            const isDesktop = window.innerWidth >= 1000;
            
            // Destruir instancia anterior
            if (triggerInstance) {
                triggerInstance.kill();
                triggerInstance = null;
            }
    
            // Crear nueva instancia con configuración adecuada
            triggerInstance = createScrollTrigger(isMobile, isDesktop);
            triggerInstance = otherScrollTriguer(isMobile, isDesktop);
        };
    
        // Event listeners y limpieza
        handleResize(); // Inicial
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
            if (triggerInstance) triggerInstance.kill();
        };
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