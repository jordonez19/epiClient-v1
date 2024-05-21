import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loader from '../shade/Loaders/Loaders';

const Dashboard = lazy(() => import('../containers/Dashboard'));
const UniversitiesContainer = lazy(() => import('../containers/Universities'));
const SchoolsContainer = lazy(() => import('../containers/Schools'));
const UniversitiesAction = lazy(() => import('../components/Universities/CreateOrEditUniversities'));
const UsersContainer = lazy(() => import('../containers/Users'));
const CreateOrEditUsers = lazy(() => import('../components/Users/CreateOrEditUsers'));
const CitiesContainer = lazy(() => import('../containers/Cities/ListCities'));
const ProfileContainer = lazy(() => import('../containers/Profile'));
const App = lazy(() => import('../shade/layouts/App'));
const AuthLogin = lazy(() => import('../Authentication/Login'));
const Error404 = lazy(() => import('../components/Pages/Authentication/404Error/404Error'));
const Error500 = lazy(() => import('../components/Pages/Authentication/500Error/500Error'));

const RoutesConfig = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {/* Páginas públicas */}
            <Route path="/" element={<AuthLogin />} />
            <Route path="/pages/Authentication/404error" element={<Error404 />} />
            <Route path="/pages/Authentication/500error" element={<Error500 />} />

            {/* Páginas privadas */}
            <Route path="/dashboard" element={<App />}>
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

                <Route path="/dashboard/schools" element={<PrivateRoute element={<SchoolsContainer />} />} />
                <Route path="/dashboard/schools/action" element={<PrivateRoute element={<UniversitiesAction />} />} />

                <Route path="/dashboard/universities" element={<PrivateRoute element={<UniversitiesContainer />} />} />
                <Route path="/dashboard/universities/action" element={<PrivateRoute element={<UniversitiesAction />} />} />

                <Route path="/dashboard/users" element={<PrivateRoute element={<UsersContainer />} roles={['admin']} />} />
                <Route path="/dashboard/users/action" element={<PrivateRoute element={<CreateOrEditUsers />} roles={['admin']} />} />

                <Route path="/dashboard/cities" element={<PrivateRoute element={<CitiesContainer />} />} />

                <Route path="/dashboard/profile" element={<PrivateRoute element={<ProfileContainer />} />} />
                <Route path="*" element={<Error404 />} />
            </Route>
            <Route path="*" element={<AuthLogin />} />
        </Routes>
    </Suspense>
);

export default RoutesConfig;
