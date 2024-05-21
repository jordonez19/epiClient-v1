import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loader from '../shade/Loaders/Loaders';

// Importaciones directas de los componentes
import Dashboard from '../containers/Dashboard';
import UniversitiesContainer from '../containers/Universities';
import UniversitiesAction from '../components/Universities/CreateOrEditUniversities';
import SchoolsContainer from '../containers/Schools';
import CitiesContainer from '../containers/Cities/ListCities';
import ProfileContainer from '../containers/Profile';
import App from '../shade/layouts/App';
import AuthLogin from '../Authentication/Login';
import Error404 from '../components/Pages/Authentication/404Error/404Error';
import Error500 from '../components/Pages/Authentication/500Error/500Error';

const RoutesConfig = () => (
    <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<Suspense fallback={<Loader />}><AuthLogin /></Suspense>} />
        <Route path="/pages/Authentication/404error" element={<Error404 />} />
        <Route path="/pages/Authentication/500error" element={<Error500 />} />

        {/* Páginas privadas */}
        <Route path="/dashboard" element={<App />}>
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/schools" element={<PrivateRoute element={<SchoolsContainer />} />} />
            <Route path="/dashboard/universities" element={<PrivateRoute element={<UniversitiesContainer />} />} />
            <Route path="/dashboard/universities/action" element={<PrivateRoute element={<UniversitiesAction />} />} />
            <Route path="/dashboard/users" element={<PrivateRoute element={<UniversitiesAction />} roles={['admin']} />} />
            <Route path="/dashboard/users/action" element={<PrivateRoute element={<UniversitiesAction />} roles={['admin']} />} />
            <Route path="/dashboard/cities" element={<PrivateRoute element={<CitiesContainer />} />} />
            <Route path="/dashboard/profile" element={<PrivateRoute element={<ProfileContainer />} />} />
            <Route path="*" element={<AuthLogin />} />
        </Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default RoutesConfig;
