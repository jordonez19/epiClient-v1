import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

//PrivatePages
const Dashboard = React.lazy(() => import('../containers/Dashboard'));
const Dashboard_1 = React.lazy(() => import('../components/Dashboard/Dashboard-1/Dashboard'));
const UniversitiesContainer = React.lazy(() => import('../containers/Universities'));
const UniversitiesAction = React.lazy(() => import('../containers/Universities/CreateOrEditUniversities'));
const SchoolsContainer = React.lazy(() => import('../containers/Schools'));
const CitiesContainer = React.lazy(() => import('../containers/Schools'));
const ProfileContainer = React.lazy(() => import('../containers/Profile'));

//PublicPages
const Auth = React.lazy(() => import('../Authentication/auth'));
const SignIn = React.lazy(() => import('../components/Pages/Authentication/SignIn/SignIn'));
const SignUp = React.lazy(() => import('../components/Pages/Authentication/SignUp/SignUp'));
const MainContainer = React.lazy(() => import('../containers/Main'));
const PublicSchool = React.lazy(() => import('../containers/Schools/PublicPage'));

//customPages
const App = React.lazy(() => import('../shade/layouts/App'));
const Switcherapp = React.lazy(() => import('../shade/layouts/Switcherapp'));
const Custompages = React.lazy(() => import('../shade/layouts/custompages'));
const AuthLogin = React.lazy(() => import('../Authentication/Login'));
const AuthSignup = React.lazy(() => import('../Authentication/Signup'));
const ForgotPassword = React.lazy(() => import('../components/Pages/Authentication/ForgotPassword/ForgotPassword'));
const Lockscreen = React.lazy(() => import('../components/Pages/Authentication/Lockscreen/Lockscreen'));
const ResetPassword = React.lazy(() => import('../components/Pages/Authentication/ResetPassword/ResetPassword'));
const Error404 = React.lazy(() => import('../components/Pages/Authentication/404Error/404Error'));
const Error500 = React.lazy(() => import('../components/Pages/Authentication/500Error/500Error'));

const RoutesConfig = () => (
    <Routes>
        {/* dominio.com/auth/login */}
        {/* //PublicPages */}
        <Route index element={<MainContainer />} />
        {/* landing */}
        <Route path="/" element={<MainContainer />} />
        <Route path="/ingles" element={<PublicSchool />} />
        <Route path="/universities" element={<MainContainer />} />
        <Route path="/porqueepi" element={<MainContainer />} />
        <Route path="/news" element={<MainContainer />} />
        {/* auth */}
        <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/signup" element={<AuthSignup />} />
        </Route>
        {/* //PrivatePages */}
        <Route path="/" element={<App />}>

            {/* dashboard main */}
            <Route path="/dashboard1" element={<PrivateRoute element={<Dashboard_1 />} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            {/* schools */}
            <Route path="/dashboard/ingles" element={<PrivateRoute element={<SchoolsContainer />} />} />
            {/* universities */}
            <Route path="/dashboard/universities" element={<PrivateRoute element={<UniversitiesContainer />} />} />
            <Route path="/dashboard/universities/action" element={<PrivateRoute element={<UniversitiesAction />} />} />

            {/* cities */}
            <Route path="/dashboard/cities" element={<PrivateRoute element={<Dashboard />} />} />
            {/*  */}
            <Route path="/dashboard/porque-epi" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/news" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/dashboard/profile" element={<PrivateRoute element={<ProfileContainer />} />} />
            <Route path="/dashboard/profile" element={<PrivateRoute element={<CitiesContainer />} />} />
            <Route path="*" element={<AuthLogin />} />
        </Route>
        {/* //customPages */}
        <Route path="/" element={<Custompages />}>
            <Route path="/pages/Authentication/signin" element={<SignIn />} />
            <Route path="/pages/Authentication/signup" element={<SignUp />} />
            <Route path="/pages/Authentication/forgotpassword" element={<ForgotPassword />} />
            <Route path="/pages/Authentication/resetpassword" element={<ResetPassword />} />
            <Route path="/pages/Authentication/lockscreen" element={<Lockscreen />} />
            <Route path="/pages/Authentication/404error" element={<Error404 />} />
            <Route path="/pages/Authentication/500error" element={<Error500 />} />
            <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="/pages/switcher/switcher-1" element={<Switcherapp />} />
    </Routes>
);

export default RoutesConfig;
