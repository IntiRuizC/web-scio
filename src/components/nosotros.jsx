import "../styles/nosotros.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
    const textContainerRef = useRef(null);
    const valuesRef = useRef(null);
    const lineRef = useRef(null);

    // Animación principal del texto
    useEffect(() => {
        const masterTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".text-section",
                start: "top top",
                end: "+=100", // Altura completa de la sección
                scrub: 2,
                pin: true,
                anticipatePin: 1
            }
        });

        masterTL.fromTo(".text-section",
            { x: "100%", opacity: 0 },
            { 
                x: "0%", 
                opacity: 1,
                ease: "power2.inOut"
            }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // Animación de la barra de progreso
    useEffect(() => {
        const progressBar = lineRef.current;
        
        gsap.fromTo(progressBar,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".values-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: 2,
                }
            }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);



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
                    start:  "top+=20 center",
                    end:  "bottom+=20 center",
                    scrub: 1,
                }
            });

            tl.fromTo(h3,
                { opacity: 0.3, y: 20 },
                { opacity: 1, y: 0, color: "#036E7C" }
            );
    
            // Animación para el p, sincronizada con el h3
            tl.fromTo(p,
                { opacity: 0.3, y: 20 },
                { opacity: 1, y: 0, color: "#f7eeba" }, // Nuevo color para el p
                "<" // Esto asegura que ambas animaciones inicien al mismo tiempo
            );

            // Animación para la bolita
            tl.fromTo(subBall,
                { backgroundColor: "#cccccc" },
                { backgroundColor: "#036E7C" },
                "-=0.5"
            );
        });

        // Limpieza
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="nosotros" id="nosotros">
            
            <div className="text-section" ref={textContainerRef}>
                <p>
                En SCIO convertimos <span>datos</span> en historias visuales que potencian decisiones estratégicas. 
                Nos especializamos en organizar, normalizar, analizar y visualizar información para maximizar 
                el valor de los <span>datos</span>. Nuestra fortaleza radica en combinar análisis preciso con diseño intuitivo. 
                Colaboramos con universidades, empresas y entidades públicas, ofreciendo soluciones personalizadas 
                que abarcan desde catalogación de <span>datos</span> hasta visualizaciones interactivas y recursos pedagógicos. 
                Cada proyecto busca democratizar el conocimiento, transformando información compleja en herramientas 
                accesibles. Porque los <span>datos</span> no son un fin, sino un punto de partida para hacer preguntas más idóneas 
                y construir respuestas más audaces
                </p>
            </div>

            <div className="top-nos"></div>

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
                                <h3>TRANS- <br /> DISCIPLINARIEDAD</h3>
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

