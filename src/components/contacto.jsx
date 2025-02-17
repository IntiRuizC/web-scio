import "../styles/contacto.css"
import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        productInfo: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log('Datos del formulario:', formData);
        alert('Formulario enviado con éxito');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="contacto-container">
            <div className="social-section">
                <div className="section-header">
                    <h2>siguenos en</h2>
                </div>
                
                <div className="links-container">
                    <a target="_blank" href="https://www.facebook.com/corporacionScio" className="social-link">
                        <p>FACEBOOK</p>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/corpo_scio?igsh=MTN3a2dya3J5MnlmZw==" className="social-link">
                        <p>INSTAGRAM</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/corporacion-scio/" className="social-link">
                        <p>LINKEDIN</p>
                    </a>
                </div>
            </div>

            <div className="form-section">
                <div className="section-header">
                    <h3>CONTÁCTANOS</h3>
                </div>
                
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="checkbox-container">
                        <label className="check-element">
                            
                            <span>¿Quieres saber más sobre un producto?</span>
                        </label>
                    </div>
                    
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
    );
}

export default ContactSection;