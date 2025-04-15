import "../styles/inicio.css";
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
    const [texto, setTexto] = useState('Datos que cuentan <br /> historias');

    // Se actualiza el estado dependendiendo del tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setTexto('Datos que cuentan historias');
            } else {
                setTexto('Datos que cuentan <br /> historias');
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        // limpiar, que no se me olvide  🤞
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".inicio",
                start: "top top",
                end: "+=100% center",
                scrub: 2,
                pin: true,
            },
        });

        tl.fromTo(
            ".background-white",
            { width: "0%", left: "100%" },
            { width: "100%", left: "0%", ease: "none" }, "-=1"
        )
        tl.fromTo(
            ".barras",
            { opacity: "0"},
            {opacity: "1", ease: "none", zIndex: "900"}, "-=1"
        )

        //debe haber una mejor forma de hacer esto...  🤷‍♂️
        tl.fromTo(".barra-mostaza1", {x: -200, opacity: "0"}, {x: 1, opacity: "1"})
            .fromTo(".barra-morada1", {y: -200, opacity: "0"}, {y: 1, opacity: "1"})
            .fromTo(".barra-verde1", { opacity: "0"}, {opacity: "1"})
            .fromTo(".barra-verde2", {scale: "0.3", opacity: "0"}, {scale: "1", opacity: "1"})
            .fromTo(".barra-naranja1", {y: "200", opacity: "0"}, {y: "0", opacity: "1"})
            .fromTo(".barra-mostaza2", {x: -200, opacity: "0"}, {x: 1, opacity: "1"})
            .fromTo(".barra-naranja2", {scale: "0.2", opacity: "0"}, {scale: "1", opacity: "1"})
            .fromTo(".barra-verde3", {scale: "0.2", opacity: "0", rotate: "90deg"}, {scale: "1", opacity: "1", rotate: "360deg"})
            .fromTo(".barra-morada2", {opacity: "0"}, {opacity: "1"})
            .fromTo(".barra-mostaza3", {scale: "0.2", opacity: "0", rotate: "90deg"}, {scale: "1", opacity: "1", rotate: "360deg"})
            .fromTo(".barra-verde4", {scale: "0", opacity: "0"}, { scale: "1", opacity: "1"})
            .fromTo(".barra-morada3", { scale: "0.3", opacity: "0"}, {scale: "1", opacity: "1"})
            .fromTo(".barra-verde5", {x: -200, opacity: "0"}, {x: 0, opacity: "1"});

        // Limpieza de animaciones cuando se desmonta
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Lo divido para aplicar la separación
    const renderTexto = texto.split('<br />').map((part, index) => (
        <span key={index}>
            {part}
            {index < texto.split('<br />').length - 1 && <br />}
        </span>
    ));

    return (
        <div className="inicio" id="inicio">
            <div className="in-text">
                {renderTexto}
            </div>
            <div className="background-white"></div>

            <div className="barras">
                <div className="barra barra-mostaza1"></div>
                <div className="barra barra-morada1"></div>
                <div className="barra barra-verde1"></div>
                <div className="barra barra-verde2"></div>
                <div className="barra barra-naranja1"></div>
                <div className="barra barra-mostaza2"></div>
                <div className="barra barra-naranja2"></div>
                <div className="barra barra-verde3"></div>
                <div className="barra barra-morada2"></div>
                <div className="barra barra-mostaza3"></div>
                <div className="barra barra-verde4"></div>
                <div className="barra barra-morada3"></div>
                <div className="barra barra-verde5"></div>
            </div>
        </div>
    );
};

export default Inicio;