import "../styles/contacto.css";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../fotos/call_made_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        producto: "",
    });

    const conContactRef = useRef(null); // Referencia para animar .con-contact

    useEffect(() => {
        const element = conContactRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contacto-container",
                start: "top top",
                end: "bottom+=10%",
                scrub: 2,
                pin: true,
                anticipatePin: 1
            }
        })

        tl.fromTo(
            element,
            { x: "100%", opacity: 0 },
            { 
                x: "0%", 
                opacity: 1,
                duration: 2,
                ease: "power2.inOut"
            },
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
        alert("Formulario enviado con éxito");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contacto-container">
            <div className="con-contact" ref={conContactRef}>
                <div className="social-section">
                    <div className="section-header">
                        <h2>Siguenos en</h2>
                    </div>

                    <div className="links-container">
                        {[
                            ["Facebook", "https://www.facebook.com/corporacionScio"],
                            ["Instagram", "https://www.instagram.com/corpo_scio?igsh=MTN3a2dya3J5MnlmZw=="],
                            ["LinkedIn", "https://www.linkedin.com/company/corporacion-scio/"],
                        ].map(([platform, url]) => (
                            <a
                                key={platform}
                                target="_blank"
                                rel="noreferrer"
                                href={url}
                                className="social-link"
                            >
                                <p>{platform} <img className="arrow-link" src={arrow} alt="Arrow" /></p>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="form-section">
                    <div className="section-header">
                        <h3>CONTÁCTANOS</h3>
                    </div>

                    <form className="form-container" onSubmit={handleSubmit}>
                        {["name", "email", "producto"].map((field) => (
                            <div key={field} className="input-field">
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    placeholder={
                                        field === "name" ? "Nombre" :
                                        field === "email" ? "Correo electrónico" :
                                        "¿Qué producto te interesa?"
                                    }
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}

                        <div className="message-field">
                            <textarea
                                name="message"
                                placeholder="Escribe tu mensaje"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                            />
                        </div>

                        <div className="submit-container">
                            <button type="submit" className="submit-button">
                                <p>ENVIAR</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
