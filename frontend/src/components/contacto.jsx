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

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: null,
        error: null,
    });

    const conContactRef = useRef(null); // Referencia para animar .con-contact

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#contacto",
            start: "top-=5% top",
            end: "bottom+=200",
            toggleClass:
                { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-conta"], className: "in-contacto" },
        });
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    useEffect(() => {
        const element = conContactRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contacto-container",
                start: "top center+=10%",
                end: "top+=10% ",
                scrub: 1,
            }
        })


        tl.fromTo(
            element,
            { x: "100%", opacity: 0, },
            {
                x: "0%",
                opacity: 1,
                ease: "power2.inOut"
            },
        )
        .fromTo("body",
            {backgroundColor: "#d03e16"},
            {backgroundColor: "#036e7c"}
        );;
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, success: null, error: null });

        try {
            // Get API URL from environment variables or use default
            const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

            const response = await fetch(`${apiBaseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // Reset form on success
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    producto: "",
                });

                setFormStatus({
                    submitting: false,
                    success: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
                    error: null
                });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setFormStatus(prev => ({ ...prev, success: null }));
                }, 5000);
            } else {
                throw new Error(result.message || 'Error al enviar el formulario');
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setFormStatus({
                submitting: false,
                success: null,
                error: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo."
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contacto-container" id="contacto">
            <div className="con-contact" ref={conContactRef}>
                <div className="top-cont"></div>
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

                    {/* Form status messages */}
                    {formStatus.success && (
                        <div className="form-message success">
                            {formStatus.success}
                        </div>
                    )}

                    {formStatus.error && (
                        <div className="form-message error">
                            {formStatus.error}
                        </div>
                    )}

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
                                    required={field !== "producto"}
                                    disabled={formStatus.submitting}
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
                                disabled={formStatus.submitting}
                            />
                        </div>

                        <div className="submit-container">
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={formStatus.submitting}
                            >
                                <p>{formStatus.submitting ? "ENVIANDO..." : "ENVIAR"}</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;