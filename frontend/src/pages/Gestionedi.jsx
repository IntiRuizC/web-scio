import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


import portf1 from "../images/gestion/Portafolio_ServiciosEditoriales.svg";
import contenido from "../images/gestion/contenido.svg";
import cont1 from "../images/gestion/1.svg";
import cont2 from "../images/gestion/2.svg";
import cont3 from "../images/gestion/3.svg";
import cont4 from "../images/gestion/4.svg";
import cont5 from "../images/gestion/5.svg";
import cont6 from "../images/gestion/6.svg";
import contacto from "../images/gestion/contacto.svg";

gsap.registerPlugin(ScrollTrigger);

const productosData = [
    { alt: "producto-entrada", desktop: portf1, bg: "#e6e4e1" },
    { alt: "contenido", desktop: contenido, bg: "#e6e4e1" },
    { alt: "cont1", desktop: cont1, bg: "#e6e4e1" },
    { alt: "cont2", desktop: cont2, bg: "#e6e4e1" },
    { alt: "cont3", desktop: cont3, bg: "#e6e4e1" },
    { alt: "cont4", desktop: cont4, bg: "#e6e4e1" },
    { alt: "cont5", desktop: cont5, bg: "#e6e4e1" },
    { alt: "cont6", desktop: cont6, bg: "#e6e4e1" },
    { alt: "contacto", desktop: contacto, bg: "#e6e4e1" },
];

function Gestionedi() {
    useEffect(() => {
        const productos = document.querySelector(".gestion-productos");
        const contenedor = document.querySelector(".gestion-container");
        const totalScroll = productos.scrollWidth - window.innerWidth;
        const distanciaExtra = window.innerHeight - 200;

        const horizontalTween = gsap.to(productos, {
            x: () => `-${totalScroll}px`,
            ease: "none",
            scrollTrigger: {
                trigger: contenedor,
                start: "top top",
                end: () => `+=${totalScroll}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        gsap.utils.toArray(".gestion-item").forEach((section) => {
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
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="gestion-container" id="gestion" style={{ overflow: "hidden" }}>
            <div className="gestion-productos" style={{ display: "flex", height: "100vh" }}>
                {productosData.map((producto, index) => (
                    <div
                        key={index}
                        className={`gestion-item ${producto.alt}`}
                        style={{
                            flex: "0 0 110vw",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: producto.bg,
                        }}
                    >
                        <img
                            src={producto.desktop}
                            alt={producto.alt}
                            style={{
                                width: "80vw",
                                height: "auto"
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gestionedi;
