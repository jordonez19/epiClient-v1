import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, roles, ...rest }: any) => {
    // Verifica si el usuario está autenticado
    const token = sessionStorage.getItem('token');
    const isAuthenticated = !!token;

    // Si hay un token, decodifica y verifica los roles del usuario (esto es un ejemplo simplificado)
    const userRoles = token ? JSON.parse(sessionStorage.getItem('userRoles') || '[]') : [];

    // Verifica si el usuario tiene alguno de los roles necesarios si los roles son proporcionados
    const hasRequiredRole = roles ? roles.some((role: any) => userRoles.includes(role)) : true;

    return isAuthenticated && hasRequiredRole ? (
        // Renderiza el elemento protegido si el usuario está autenticado y tiene el rol necesario
        element
    ) : (
        // Redirige a la página de login si el usuario no está autenticado o no tiene el rol necesario
        <Navigate to="/auth/login" replace />
    );
};

export default PrivateRoute;
