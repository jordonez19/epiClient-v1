// SchoolsContainer.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

const SchoolsContainer = () => {
    return (
        <div>
            <h1>Página SchoolsContainer</h1>
            {/* Botón de inicio de sesión */}
            <Link to={`authentication`}>
                <button>Iniciar sesión</button>
            </Link>
        </div>
    );
};

export default SchoolsContainer;
