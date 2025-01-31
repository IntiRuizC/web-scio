import "../styles/clientes.css"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ListaUniversidades = () => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const items = itemsRef.current;

        // Resetear colores
        items.forEach((item) => {
            gsap.set(item, { color: "#cccccc" });
        });

        items.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "center-=40% center", // A esta distancia del centro no se choca con el final del otro
                end: "center+=50% center", // Una zona de selección amplia
                onEnter: () => {
                    // Cambio de entrada
                    gsap.to(item, { color: "#CE3C15", duration: 0 });
                },
                onLeave: () => {
                    // Reseteo de salida
                    gsap.to(item, { color: "#cccccc", duration: 0 });
                },
                onEnterBack: () => {
                    gsap.to(item, { color: "#CE3C15", duration: 0 });
                },
                onLeaveBack: () => {
                    gsap.to(item, { color: "#cccccc", duration: 0 });
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="clientes">
            <div className="top-client"> <span>CLIENTES</span> </div>
            {[
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
                "UNIVERSIDAD DE LOS ANDES"
                
            ].map((text, index) => (
                <h2
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className="cliente"
                >
                    {text}
                </h2>
            ))}
        </div>
    );
};

export default ListaUniversidades;
