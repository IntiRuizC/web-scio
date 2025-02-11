import "../styles/nosotros.css";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
    const textContainerRef = useRef(null);
    const valuesRef = useRef(null);
    const lineRef = useRef(null);

    // Estado para controlar el texto dinámico
    const [transdisciplinariedadText, setTransdisciplinariedadText] = useState("TRANSDISCIPLINARIEDAD");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1100) {
                setTransdisciplinariedadText("TRANSDIS- <br /> CIPLINARIEDAD");
            } else {
                setTransdisciplinariedadText("TRANSDISCIPLINARIEDAD");
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderTransdisciplinariedadText = transdisciplinariedadText.split('<br />').map((part, index) => (
        <span key={index}>
            {part}
            {index < transdisciplinariedadText.split('<br />').length - 1 && <br />}
        </span>
    ));


    useEffect(() => {
        const progressBar = lineRef.current;

        // Animación con GSAP y ScrollTrigger
        gsap.fromTo(
            progressBar,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: valuesRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 2,
                },
            }
        );

        // Limpieza de la animación al desmontar el componente
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Configuración de la animación para el texto y las bolitas
    useEffect(() => {
        // Animación para todos los elementos .value
        gsap.utils.toArray(".value").forEach((value, i) => {
            const h3 = value.querySelector("h3");
            const p = value.querySelector("p");
            const subBall = value.querySelector(".sub-ball");

            // Timeline para cada elemento
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: value,
                    start: "top center+=100",
                    end: "top center",
                    scrub: 1,
                }
            });

            // Animación para el texto
            tl.fromTo([h3, p],
                { opacity: 0.3, y: 20 },
                { opacity: 1, y: 0, color: "#fff" }
            );

            // Animación para la bolita
            tl.fromTo(subBall,
                { backgroundColor: "#cccccc)" },
                { backgroundColor: "hsla(32, 88%, 58%, 0.93)" },
                "-=0.5"
            );
        });

        // Limpieza
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="nosotros">
            <div className="text-section" ref={textContainerRef}>
                <p>
                    SCIO es una organización sin ánimo de lucro que, desde hace más de 15 años, transforma datos complejos
                    en herramientas accesibles y útiles. Nuestro proceso comienza con la normalización y organización de la
                    información, porque sin datos limpios y bien estructurados, no hay análisis que valga. A partir de ahí,
                    creamos visualizaciones que no solo son claras y efectivas, sino también pedagógicas.
                </p>
            </div>

            <div className="values-section" ref={valuesRef}>
                <h2>VALORES</h2>
                <div className="line-container">

                    <div className="progress">
                        <div className="line-background">
                            <div className="line-progress" ref={lineRef}></div>
                        </div>
                    </div>

                    <div className="values">
                        <div className="value">
                            <div className="subtittle">
                                <h3>ESCEPTICISMO</h3>
                            </div>
                            <div className="ball-contain">
                                <div className="sub-ball"></div>
                            </div>

                            <div className="val-description">
                                <p>
                                    Cuestionar y verificar la información antes de aceptarla, garantizando
                                    que los datos y análisis sean fiables y precisos. Esto respalda nuestra
                                    misión de ofrecer información clara y educativa basada en fundamentos
                                    sólidos.
                                </p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="subtittle">
                                <h3>CRITICISMO</h3>
                            </div>
                            <div className="ball-contain">
                                <div className="sub-ball"></div>
                            </div>
                            <div className="val-description">
                                <p>
                                    Fomentar una actitud crítica hacia nuestras soluciones para impulsar la
                                    innovación y la mejora continua, asegurando que nuestra misión de
                                    transformar datos en información valiosa y educativa se mantenga en
                                    constante evolución
                                </p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="subtittle">
                                <h3>PESIMISMO TECNOLÓGICO</h3>
                            </div>
                            <div className="ball-contain">
                                <div className="sub-ball"></div>
                            </div>
                            <div className="val-description">
                                <p>
                                    Adoptar una actitud crítica respecto a los posibles efectos adversos de la
                                    tecnología, para equilibrar la innovación con una evaluación cuidadosa
                                    de sus impactos, alineándonos con nuestra misión de ofrecer soluciones
                                    sostenibles y efectivas.
                                </p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="subtittle">
                                <h3>{renderTransdisciplinariedadText}</h3>
                            </div>
                            <div className="ball-contain">
                                <div className="sub-ball"></div>
                            </div>
                            <div className="val-description">
                                <p>
                                    Integrar conocimientos de diversas disciplinas para abordar problemas
                                    complejos de manera efectiva, apoyando nuestra misión de simplificar y
                                    educar sobre la información mediante un enfoque colaborativo y
                                    holístico
                                </p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="subtittle">
                                <h3>COMPETENCIA COMUNICATIVA</h3>
                            </div>
                            <div className="ball-contain">
                                <div className="sub-ball"></div>
                            </div>
                            <div className="val-description">
                                <p>
                                    Contar con las facultades que nos permitan una buena interacción con
                                    diferentes tipos de usuarios, con el fin de responder a sus necesidades
                                    informacionales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}