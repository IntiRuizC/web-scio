import "../styles/clientes.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ListaUniversidades = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const itemsRef = useRef([]);
    const [universidades] = useState([
        "UNIVERSIDAD COOPERATIVA DE COLOMBIA",
        "UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA",
        "UNIVERSITARIA AGUSTINIANA",
        "UNIVERSIDAD CATÓLICA DE MANIZALES",
        "FUNDACIÓN UNIVERSITARIA DEL ÁREA ANDINA",
        "UNIVERSIDAD DISTRITAL",
        "FRANCISCO JOSÉ DE CALDAS",
        "CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO",
        "CORPORACIÓN UNIVERSITARIA ASTURIAS",
        "CORPORACIÓN POLITÉCNICA NACIONAL DE COLOMBIA",
        "UNIVERSIDAD PILOTO DE COLOMBIA",
        "UNIVERSIDAD AUTÓNOMA DE COLOMBIA",
        "UNIVERSIDAD DE LA SALLE",
        "FULECOL",
        "CANCILLERÍA - MINISTERIO DE RELACIONES EXTERIORES",
        "PONTIFICIA UNIVERSIDAD JAVERIANA",
        "FUNDACIÓN INSTITUTO DE INMUNOLOGÍA",
        "UNIVERSIDAD DE PAMPLONA",
        "FEMPOPULAR",
        "UNIVERSIDAD DEL NORTE",
        "ASOCIACIÓN COLOMBIANA DE AUDIOLOGÍA",
        "UNIVERSIDAD DE LOS ANDES",
        "UNIVERSIDAD COOPERATIVA DE COLOMBIA",
        "UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA",
        "UNIVERSITARIA AGUSTINIANA",
        "UNIVERSIDAD CATÓLICA DE MANIZALES",
        "FUNDACIÓN UNIVERSITARIA DEL ÁREA ANDINA",
        "UNIVERSIDAD DISTRITAL",
        "FRANCISCO JOSÉ DE CALDAS",
        "CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO",
        "CORPORACIÓN UNIVERSITARIA ASTURIAS",
        "CORPORACIÓN POLITÉCNICA NACIONAL DE COLOMBIA",
        "UNIVERSIDAD PILOTO DE COLOMBIA",
        "UNIVERSIDAD AUTÓNOMA DE COLOMBIA",
    ]);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#clientes",
            start: "top-=5% top",
            end: "bottom-=8%",
            toggleClass:
                { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor",
                    ".nav-clien", "#menu-clie", "#menu-toggle"], className: "in-clientes" },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;
        const items = itemsRef.current;
        let animationFrameId;


        // 1. Detectar el tamaño de la ventana para ajustar la duración de la animación
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth < 1000;
        const animationDuration = isMobile ? 35 : 65; // Ajusta la duración según la resolución

        // 2. Scroll infinito con GSAP
        const contentHeight = wrapper.scrollHeight;

        const animation = gsap.to(wrapper, {
            y: -contentHeight,
            ease: "none",
            duration: animationDuration,
            repeat: -1,
            modifiers: {
                y: (y) => {
                    const yPercent = parseFloat(y) % contentHeight;
                    return `${yPercent}px`;
                },
            },
        });

        // 2. Función para detectar el elemento más cercano al centro
        const highlightClosest = () => {
            const containerRect = container.getBoundingClientRect();
            const centerY = containerRect.top + containerRect.height / 2;

            let closestElement = null;
            let closestDistance = Infinity;

            items.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const distance = Math.abs(itemRect.top + itemRect.height / 2 - centerY);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestElement = item;
                }
            });

            // Resetear clases
            items.forEach((item) => item.classList.remove("cliente-activo"));

            // Activar el más cercano
            if (closestElement) {
                closestElement.classList.add("cliente-activo");
            }

            animationFrameId = requestAnimationFrame(highlightClosest);
        };

        highlightClosest(); // Iniciar la detección

        return () => {
            animation.kill();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="clientes-container" id="clientes">
            <div className="top-client"></div>
            <div ref={wrapperRef} className="clientes-wrapper">
                {[...universidades, ...universidades].map((text, index) => (
                    <h2
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className="cliente"
                    >
                        {text}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default ListaUniversidades;
