import "../styles/nosotros.css"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
    const textContainerRef = useRef(null);
    const valuesRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        
        ScrollTrigger.create({
            trigger: ".nosotros",
            markers: true,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 2,
        });
    
    
        gsap.to(".nosotros", {
            xPercent: -75,
            ease: "none",
            scrollTrigger: {
                trigger: ".nosotros",
                start: "top top",
                end: "+=3000",
                scrub: 3,
            },
        });
    }, []);

    return (
        <div className="nosotros">
            {/* Texto largo */}
            <div className="text-section" ref={textContainerRef}>
                <p>
                    SCIO es una organización sin ánimo de lucro que, desde hace más de 15 años, transforma datos complejos
                    en herramientas accesibles y útiles. Nuestro proceso comienza con la normalización y organización de la
                    información, porque sin datos limpios y bien estructurados, no hay análisis que valga. A partir de ahí,
                    creamos visualizaciones que no solo son claras y efectivas, sino también pedagógicas.
                </p>
            </div>

            {/* Valores */}
            <div className="values-section" ref={valuesRef}>
                <h2>VALORES</h2>
                <div className="line-container">
                    <div className="line-background">
                        <div className="line-progress" ref={lineRef}></div>
                    </div>
                    <div className="values">
                        <div className="value">
                            <h3>ESCEPTICISMO</h3>
                            <p>
                                Cuestionar y verificar la información antes de aceptarla, garantizando que los datos y análisis sean fiables y precisos.
                            </p>
                        </div>
                        <div className="value">
                            <h3>CRITICISMO</h3>
                            <p>
                                Fomentar una actitud crítica hacia nuestras soluciones para impulsar la innovación y la mejora continua.
                            </p>
                        </div>
                        <div className="value">
                            <h3>PESIMISMO TECNOLÓGICO</h3>
                            <p>
                                Adoptar una actitud crítica respecto a los posibles efectos adversos de la tecnología.
                            </p>
                        </div>
                        <div className="value">
                            <h3>TRANSDISCIPLINARIEDAD</h3>
                            <p>
                                Integrar conocimientos de diversas disciplinas para abordar problemas complejos de manera efectiva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
