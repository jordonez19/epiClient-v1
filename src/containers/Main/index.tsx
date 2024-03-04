// MainContainer.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

const MainContainer = () => {
    return (
        <div>
            <h1>Página principal</h1>
            {/* Botón de inicio de sesión */}
            <Link to={`auth/login`}>
                <button>Iniciar sesión</button>
            </Link>
        </div>
    );
};

export default MainContainer;
