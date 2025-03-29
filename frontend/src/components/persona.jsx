import React from "react";

const Persona = ({ nombre, cargo, correo, dependencia, area, imagen, color }) => {
    return (
        <div className="tarjeta-persona">
            <div className="info-persona">
                <h3 className="nombre">{nombre}</h3>
                <span style={{color: color}} >Área: {area}</span>
                <div className="box-divi"></div>
                
                <div className="linea-equi"></div>

                <div className="detalle">
                    <h4 className="cargo">{cargo}</h4>
                    <div className="block-det"></div>
                    <p className="correo"> {correo} </p>
                </div>
            </div>
        </div>
    );
};

export default Persona;