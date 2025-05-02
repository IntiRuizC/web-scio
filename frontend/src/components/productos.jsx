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

//Import producto 2 (Evaluación por pares)
import evaluacionpp from "../images/producto2/Producto2_eval.svg"

//Import portada
import productport from "../images/portada/Portada2.svg"
import productport2 from "../images/portada/Portada3.svg"




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
        bg: "#036e7c"
    },
    {
        alt: "ojs-omp",
        mobile: productoMobileNarrow,
        tablet: productoTablet,
        desktop: producto16by9,
        bg: "#ffffff"
    },
    {
        alt: "producto-portada",
        mobile: productport,
        tablet: productport2,
        desktop: productport2,
        bg: "#036e7c"
    },
    {
        alt: "evaluacionpp",
        mobile: evaluacionpp,
        tablet: evaluacionpp,
        desktop: evaluacionpp,
        bg: "#ffffff"
    },
];


const HorizontalScrollSection = () => {
    

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
                toggleClass: {
                    targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod", "#menu-prod", "#menu-toggle"],
                    className: "in-productos"
                }
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
                    end: "right-=100 right",
                    scrub: 1,
                    markers: true
                }
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
                                    width: "80vw",         // que ocupe todo el contenedor
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
