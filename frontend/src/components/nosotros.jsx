import "../styles/nosotros.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
    const textContainerRef = useRef(null);
    const valuesRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#nosotros",
            start: "top-=1% top",
            end: "bottom-=5%",
            toggleClass:
                { targets: [".navbar", ".ulvert",".logoblanco",
                    ".logocolor", ".nav-us", "#menu-nos", "#menu-toggle"], className: "in-nosotros" },
        });
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // Animación principal del texto
    useEffect(() => {
        const masterTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".text-section",
                start: "top center-=20%",
                end: "center+=20% bottom", // Altura completa de la sección
                scrub: 2,
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
        gsap.utils.toArray(".val-description").forEach((value, i) => {
            const subtittle = value.previousElementSibling?.previousElementSibling?.querySelector("h3");
            const p = value.querySelector("p");
            const subBall = value.previousElementSibling.querySelector(".sub-ball");

            // Timeline para cada elemento
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: value,
                    start: "top+=20 center",
                    end: "bottom+=20 center",
                    scrub: 1,
                }
            });

            tl.fromTo(p,
                { opacity: 0.3, y: 20 },
                { opacity: 1, y: 0, color: "#f7eeba" },
                "<"
            );

            // Animación para la bolita
            tl.fromTo(subBall,
                { backgroundColor: "#cccccc" },
                { backgroundColor: "#036E7C" },
                "<"
            )
            tl.fromTo(subtittle,
                { opacity: 0.3, y: 20 },
                { opacity: 1, y: 0, color: "#036E7C" },
                "<"
            );;
        });

        // Limpieza
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="nosotros" id="nosotros">

            <div className="text-section" ref={textContainerRef}>
                <p>
                    En SCIO convertimos <span>datos</span> en historias visuales que potencian decisiones estratégicas.
                    Nos especializamos en organizar, normalizar, analizar y<span> visualizar </span>información para maximizar
                    el valor de los datos. Nuestra fortaleza radica en combinar análisis preciso con diseño intuitivo.
                    Colaboramos con universidades, empresas y entidades públicas, ofreciendo soluciones personalizadas
                    que abarcan desde catalogación de datos hasta visualizaciones interactivas y recursos <span> pedagógicos</span>.
                    Cada proyecto busca democratizar el conocimiento, transformando información compleja en herramientas
                    accesibles. Porque los datos no son un fin, sino un punto de partida para hacer<span> preguntas </span>más idóneas
                    y construir respuestas más audaces
                </p>
            </div>

            <div className="top-nos"></div>

            <div className="values-section" ref={valuesRef}>
                <h2>VALORES</h2>


                <div className="values">
                    <div className="subtittle escep">
                        <h3>ESCEPTICISMO</h3>
                    </div>
                    <div className="ball-contain escep">
                        <div className="sub-ball"></div>
                    </div>
                    <div className="val-description escep">
                        <p>
                            Cuestionar y verificar la información antes de aceptarla, garantizando
                            que los datos y análisis sean fiables y precisos. Esto respalda nuestra
                            misión de ofrecer información clara y educativa basada en fundamentos
                            sólidos.
                        </p>
                    </div>
                    <div className="subtittle criticismo">
                        <h3>CRITICISMO</h3>
                    </div>
                    <div className="ball-contain criticismo">
                        <div className="sub-ball"></div>
                    </div>
                    <div className="val-description criticismo">
                        <p>
                            Fomentar una actitud crítica hacia nuestras soluciones para impulsar la
                            innovación y la mejora continua, asegurando que nuestra misión de
                            transformar datos en información valiosa y educativa se mantenga en
                            constante evolución
                        </p>
                    </div>

                    <div className="line-container">
                        <div className="progress">
                            <div className="line-background">
                                <div className="line-progress" ref={lineRef}></div>
                            </div>
                        </div>
                    </div>


                    <div className="subtittle pesimismo">
                        <h3>PESIMISMO TECNOLÓGICO</h3>
                    </div>
                    <div className="ball-contain pesimismo">
                        <div className="sub-ball"></div>
                    </div>
                    <div className="val-description pesimismo">
                        <p>
                            Adoptar una actitud crítica respecto a los posibles efectos adversos de la
                            tecnología, para equilibrar la innovación con una evaluación cuidadosa
                            de sus impactos, alineándonos con nuestra misión de ofrecer soluciones
                            sostenibles y efectivas.
                        </p>
                    </div>

                    <div className="subtittle trans">
                        <h3>TRANS- <br /> DISCIPLINARIEDAD</h3>
                    </div>
                    <div className="ball-contain trans">
                        <div className="sub-ball"></div>
                    </div>
                    <div className="val-description trans">
                        <p>
                            Integrar conocimientos de diversas disciplinas para abordar problemas
                            complejos de manera efectiva, apoyando nuestra misión de simplificar y
                            educar sobre la información mediante un enfoque colaborativo y
                            holístico
                        </p>
                    </div>

                    <div className="subtittle competencia">
                        <h3>COMPETENCIA COMUNICATIVA</h3>
                    </div>
                    <div className="ball-contain competencia">
                        <div className="sub-ball"></div>
                    </div>
                    <div className="val-description competencia">
                        <p>
                            Contar con las facultades que nos permitan una buena interacción con
                            diferentes tipos de usuarios, con el fin de responder a sus necesidades
                            informacionales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

