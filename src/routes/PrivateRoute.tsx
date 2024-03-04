import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }: any) => {
    // Verifica si el usuario está autenticado (por ejemplo, comprobando si existe un token en sessionStorage)
    const isAuthenticated = sessionStorage.getItem('token');

    return isAuthenticated ? (
        // Renderiza el elemento protegido si el usuario está autenticado
        element
    ) : (
        // Redirige a la página de inicio de sesión si el usuario no está autenticado
        <Navigate to="/auth/login" replace />
    );
};

export default PrivateRoute;
