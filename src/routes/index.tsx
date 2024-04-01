import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loader from '../shade/Loaders/Loaders';

// Importaciones directas de los componentes
import Dashboard from '../containers/Dashboard';
import Dashboard1 from '../components/Dashboard/Dashboard';
import UniversitiesContainer from '../containers/Universities';
import UniversitiesAction from '../containers/Universities/CreateOrEditUniversities';
import SchoolsContainer from '../containers/Schools';
import CitiesContainer from '../containers/Cities/ListCities';
import ProfileContainer from '../containers/Profile';
import Auth from '../Authentication/auth';
import MainContainer from '../containers/Main';
import PublicSchool from '../containers/Main/PublicPage';
import App from '../shade/layouts/App';
import Switcherapp from '../shade/layouts/Switcherapp';
import AuthLogin from '../Authentication/Login';
import AuthSignup from '../Authentication/Signup';
import Error404 from '../components/Pages/Authentication/404Error/404Error';
import Error500 from '../components/Pages/Authentication/500Error/500Error';

const RoutesConfig = () => (
    <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<Suspense fallback={<Loader />}><MainContainer /></Suspense>} />
        <Route path="/ingles" element={<Suspense fallback={<Loader />}><PublicSchool /></Suspense>} />
        <Route path="/universities" element={<Suspense fallback={<Loader />}><MainContainer /></Suspense>} />
        <Route path="/porqueepi" element={<Suspense fallback={<Loader />}><MainContainer /></Suspense>} />
        <Route path="/news" element={<Suspense fallback={<Loader />}><MainContainer /></Suspense>} />
        <Route path="/pages/Authentication/404error" element={<Error404 />} />
        <Route path="/pages/Authentication/500error" element={<Error500 />} />
        <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/signup" element={<AuthSignup />} />
        </Route>

        {/* Páginas privadas */}
        <Route path="/dashboard" element={<App />}>
            <Route path="/dashboard1" element={<PrivateRoute element={<Dashboard1 />} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/ingles" element={<PrivateRoute element={<SchoolsContainer />} />} />
            <Route path="/dashboard/universities" element={<PrivateRoute element={<UniversitiesContainer />} />} />
            <Route path="/dashboard/universities/action" element={<PrivateRoute element={<UniversitiesAction />} />} />
            <Route path="/dashboard/cities" element={<PrivateRoute element={<CitiesContainer />} />} />
            <Route path="/dashboard/porque-epi" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/news" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/profile" element={<PrivateRoute element={<ProfileContainer />} />} />
            <Route path="*" element={<AuthLogin />} />
        </Route>
        <Route path="/pages/switcher/switcher-1" element={<Switcherapp />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default RoutesConfig;
