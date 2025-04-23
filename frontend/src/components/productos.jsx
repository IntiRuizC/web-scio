// Import Product 1 SVGs (one per unique aspect ratio)
import producto16by9 from "../images/producto1/Producto1_web_1280x720.svg";       // 16:9 ratio (~1.78:1)
import producto4by3 from "../images/producto1/Producto1_web_1024x768.svg";        // 4:3 ratio (1.33:1)
import productoMobileNarrow from "../images/producto1/Producto1_web_390x844.svg"; // Mobile portrait (~0.46:1)
import productoTablet from "../images/producto1/Producto1_web_820x1180.svg";      // Tablet portrait (~0.69:1)

// Import Product 2 SVGs (Portada)
import portada16by9 from "../images/productoEntrada/Portada_web_1280x720.svg";          // 16:9 ratio (~1.78:1)
import portada4by3Landscape from "../images/productoEntrada/Portada_web_1024x768.svg";  // 4:3 landscape (1.33:1)
import portada4by3Portrait from "../images/productoEntrada/Portada_web_768x1024.svg";   // 4:3 portrait (0.75:1)
import portadaMobileNarrow from "../images/productoEntrada/Portada_web_390x844.svg";    // Mobile portrait (~0.46:1)
import portadaTablet from "../images/productoEntrada/Portada_820x1180.svg";             // Tablet portrait (~0.69:1)



// HorizontalScrollSection.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productosData = [

    {
        alt: "producto-entrada",
        mobile: portadaMobileNarrow,
        tablet: portadaTablet,
        desktop: portada16by9,
        bg: "hsl(187, 95%, 25%)"
    },
    {
        alt: "ojs-omp",
        mobile: productoMobileNarrow,
        tablet: productoTablet,
        desktop: producto16by9,
        bg: "#f5f5f5"
    },
];


const HorizontalScrollSection = () => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".productos",
            start: "top-=5% top",
            end: "bottom+=90%",
            toggleClass:
            {
                targets: [".navbar", ".ulvert", ".logoblanco",
                    ".logocolor", ".nav-prod", "#menu-nos", "#menu-toggle"], className: "in-productos"
            },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    useEffect(() => {
        const productos = document.querySelector(".productos");
        const totalScroll = productos.scrollWidth - window.innerWidth;

        const horizontalTween = gsap.to(productos, {
            x: () => `-${totalScroll}px`,
            ease: "none",
            scrollTrigger: {
                id: "horizontalScroll",
                trigger: ".productos-container",
                start: "top top",
                end: () => `+=${totalScroll}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });


        // Entrada de imagenes al hacer scroll horizontal
        gsap.utils.toArray(".producto").forEach((section) => {
            const image = section.querySelector("img");

            gsap.fromTo(image, {
                y: -100,
                opacity: 0
            }, {
                y: 10,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    end: "right right+=300",
                    scrub: true,
                }
            });
        });

        // const navConfig = [
        //     { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod", "#menu-nos", "#menu-toggle"], offset: "0%" },
        //     { targets: [".nav-conta", "#menu-prod", "#menu-toggle"], offset: "5%" },
        //     { targets: [".nav-team"], offset: "10%" },
        //     { targets: [".nav-us"], offset: "15%" },
        //     { targets: [".nav-clien"], offset: "18%" },
        //     { targets: [".nav-prod"], offset: "23%", className: "prod-navpos" }
        // ];

        const navConfig = [
            { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod", "#menu-nos", "#menu-toggle"], offset: "10%" },
            { targets: [".nav-conta", "#menu-prod", "#menu-toggle"], offset: "10%" },
            { targets: [".nav-team"], offset: "10%" },
            { targets: [".nav-us"], offset: "10%" },
            { targets: [".nav-clien"], offset: "10%" },
            { targets: [".nav-prod"], offset: "10%", className: "prod-navpos" }
        ];

        navConfig.forEach(({ targets, offset, className = "nav-black" }) => {
            ScrollTrigger.create({
                trigger: ".ojs-omp",
                containerAnimation: horizontalTween,
                start: `left+=${offset} center`,
                end: `center center`,
                scrub: true,
                toggleClass: { targets, className }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <section className="productos-container" id= "productos" style={{ overflow: "hidden" }}>
            <div className="productos" style={{ display: "flex", height: "100vh" }}>
                {productosData.map((producto, index) => (
                    <div
                        key={index}
                        className={`producto ${producto.alt}`}
                        style={{
                            flex: "0 0 110vw",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: producto.bg
                        }}
                    >
                        <picture>
                            {/* Versión de escritorio para pantallas muy anchas */}
                            <source
                                media="(min-width: 1000px)"
                                srcSet={producto.desktop}

                            />
                            {/* Versión tablet / pantallas medianas */}
                            <source
                                media="(min-width: 769px)"
                                srcSet={producto.tablet}

                            />
                            {/* Fallback móvil y última esperanza de la humanidad */}
                            <img
                                src={producto.mobile}
                                alt={producto.alt}
                                style={{
                                    width: "85vw",         // que ocupe todo el contenedor
                                    height: "auto"         // sin deformarse
                                }}
                            />
                        </picture>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HorizontalScrollSection;
