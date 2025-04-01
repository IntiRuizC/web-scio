import React, { useState } from "react";
import Persona from "./persona.jsx";
import "../styles/equipo.css";
import adrianaxImg from "../fotos/Adriana_Silva.jpg";
import alexImg from "../fotos/Alex_González.jpg";
import ellelverImg from "../fotos/Ellelver_Meneses.jpg";
import ernestoxImg from "../fotos/Ernesto_Silva.jpg";
import jesusImg from "../fotos/Jesús_Gaitán.jpg";
import julianaImg from "../fotos/Juliana_Poveda.jpg";
import paolaImg from "../fotos/Paola_Camacho.jpg";
import intImg from "../fotos/Inti_Ruiz.jpg";
import alexandra from "../fotos/Alexandra_Castro.jpg"
const Equipo = () => {
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
    const isMobile = window.innerWidth < 1100;

    const equipo = [
        {
            id: 1,
            nombre: "Jhon González",
            correo: "jgonzalez@sciocorp.org",
            dependencia: "Innovación y desarrollo",
            cargo: "Desarrollador Front End",
            area: "I+D+I",
            color: "#ce3c15", // Naranja
            imagen: alexImg
        },
        {
            id: 2,
            nombre: "Paola Camacho",
            correo: "contabilidad@sciocorp.org",
            dependencia: "Administración general",
            cargo: "Coordinadora Financiera y Administrativa",
            area: "Administración",
            color: "#036E7C", // Verde
            imagen: paolaImg
        },
        {
            id: 3,
            nombre: "Jesús Gaitán",
            correo: "jgaitan@sciocorp.org",
            dependencia: "Innovación y desarrollo",
            cargo: "Científico de datos",
            area: "I+D+I",
            color: "#ce3c15",
            imagen: jesusImg 
        },
        {
            id: 4,
            nombre: "Inti Ruíz",
            correo: "iruiz@sciocorp.org",
            dependencia: "Innovación y desarrollo",
            cargo: "Coordinador de Innovación y Desarrollo",
            area: "I+D+I",
            color: "#ce3c15",
            imagen: intImg
        },
        {
            id: 5,
            nombre: "Ernesto Silva",
            correo: "esilva@sciocorp.org",
            dependencia: "Comunicación",
            cargo: "Realizador audiovisual",
            area: "Comunicaciones",
            color: "#F29C37",
            imagen: ernestoxImg
        },
        {
            id: 6,
            nombre: "Juliana Poveda",
            correo: "jpoveda@sciocorp.org",
            dependencia: "Comunicación",
            cargo: "Diseñadora gráfica",
            area: "Comunicaciones",
            color: "#F29C37",
            imagen: julianaImg
        },
        {
            id: 7,
            nombre: "Ellelver Meneses",
            correo: "emeneses@sciocorp.org",
            dependencia: "Innovación y desarrollo",
            cargo: "Desarrollador Back End",
            area: "I+D+I",
            color: "#ce3c15",
            imagen: ellelverImg
        },
        {
            id: 8,
            nombre: "Adriana Silva",
            correo: "asilva@sciocorp.org",
            dependencia: "Gestión de proyectos",
            cargo: "Directora ejecutiva",
            area: "Administración",
            color: "#036E7C",
            imagen: adrianaxImg
        },
        {
            id: 9,
            nombre: "María Castro",
            correo: "acastro@sciocorp.org",
            dependencia: "Innovación y desarrollo",
            cargo: "Especialista en gestión editorial",
            area: "Comunicación",
            color: "#F29C37",
            imagen: alexandra
        }
    ];


    return (
        <div className="equipo" id="equipo">
            <div className="columna-burbujas">
                <h2>Nuestro Equipo</h2>
                <div className="lista-burbujas">
                    <div className="burbuja-rell1"></div>
                    <div className="burbuja-rell2"></div>
                    <div className="burbuja-rell3"></div>
                    <div className="burbuja-rell4"></div>
                    <div className="burbuja-rell5"></div>
                    <div className="burbuja-rell6"></div>
                    <div className="burbuja-rell7"></div>
                    {equipo.map((persona) => (
                        <div
                            key={persona.id}
                            className={`burbuja burbuja${persona.id} ${personaSeleccionada?.id === persona.id ? 'selected' : ''}`} style={{ 
                                border: `${isMobile ?  "3px solid" : "7px solid"} ${persona.color}`, // Borde con color del objeto
                                backgroundColor: "#fff",
                                display: "flex"
                            }}
                            onClick={() => setPersonaSeleccionada(persona)}
                        >
                            <img src={persona.imagen} alt={persona.nombre} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="columna-detalle">
                {personaSeleccionada ? (
                    <Persona 
                        nombre={personaSeleccionada.nombre}
                        cargo={personaSeleccionada.cargo}
                        correo={personaSeleccionada.correo}
                        dependencia={personaSeleccionada.dependencia}
                        area={personaSeleccionada.area}
                        color={personaSeleccionada.color}
                    />
                ) : (
                    <div className="placeholder-detalle">
                        <p>Selecciona un miembro del equipo para ver su información</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Equipo;