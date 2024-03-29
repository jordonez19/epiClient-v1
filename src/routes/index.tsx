import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loader from '../shade/Loaders/Loaders';

//PrivatePages
const Dashboard = React.lazy(() => import('../containers/Dashboard'));
const Dashboard1 = React.lazy(() => import('../components/Dashboard/Dashboard-1/Dashboard'));
const UniversitiesContainer = React.lazy(() => import('../containers/Universities'));
const UniversitiesAction = React.lazy(() => import('../containers/Universities/CreateOrEditUniversities'));
const SchoolsContainer = React.lazy(() => import('../containers/Schools'));
const CitiesContainer = React.lazy(() => import('../containers/Cities/ListCities'));
const ProfileContainer = React.lazy(() => import('../containers/Profile'));

//PublicPages
const Auth = React.lazy(() => import('../Authentication/auth'));
/* const SignUp = React.lazy(() => import('../components/Pages/Authentication/SignUp/SignUp'));*/
const MainContainer = React.lazy(() => import('../containers/Main'));
const PublicSchool = React.lazy(() => import('../containers/Main/PublicPage'));

//customPages
const App = React.lazy(() => import('../shade/layouts/App'));
const Switcherapp = React.lazy(() => import('../shade/layouts/Switcherapp'));
const AuthLogin = React.lazy(() => import('../Authentication/Login'));
const AuthSignup = React.lazy(() => import('../Authentication/Signup'));
const Error404 = React.lazy(() => import('../components/Pages/Authentication/404Error/404Error'));
const Error500 = React.lazy(() => import('../components/Pages/Authentication/500Error/500Error'));

/* const Custompages = React.lazy(() => import('../shade/layouts/custompages'));
const ForgotPassword = React.lazy(() => import('../components/Pages/Authentication/ForgotPassword/ForgotPassword'));
const Lockscreen = React.lazy(() => import('../components/Pages/Authentication/Lockscreen/Lockscreen'));
const ResetPassword = React.lazy(() => import('../components/Pages/Authentication/ResetPassword/ResetPassword')); */

const RoutesConfig = () => (
    <Routes>
        {/* //Public Pages */}
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

        {/* Private Pages */}
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
