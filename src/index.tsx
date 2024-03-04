import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Authentication/auth";
import "./index.scss";
import Loader from "./shade/Loaders/Loaders"
import store from './redux/store/store';
import { Provider } from 'react-redux';
import MainContainer from './containers/Main';
import PrivateRoute from './routes/PrivateRoute';
import ProfileContainer from './containers/Profile';

const App = React.lazy(() => import("../src/shade/layouts/App"));
const Switcherapp = React.lazy(() => import("../src/shade/layouts/Switcherapp"));
const Custompages = React.lazy(() => import("../src/shade/layouts/custompages"));

const Dashboard = React.lazy(() =>
  import("./components/Dashboard/Dashboard-1/Dashboard")
);
const Universities = React.lazy(() =>
  import("./containers/Universities")
);
const Schools = React.lazy(() =>
  import("./containers/Schools")
);


//AUTH
const AuthLogin = React.lazy(() => import("./Authentication/Login"));
const AuthSignup = React.lazy(() => import("./Authentication/Signup"))

//pages
const SignUp = React.lazy(() =>
  import("./components/Pages/Authentication/SignUp/SignUp")
);
const SignIn = React.lazy(() =>
  import("./components/Pages/Authentication/SignIn/SignIn")
);
const ForgotPassword = React.lazy(() =>
  import("./components/Pages/Authentication/ForgotPassword/ForgotPassword")
);
const Lockscreen = React.lazy(() =>
  import("./components/Pages/Authentication/Lockscreen/Lockscreen")
);
const ResetPassword = React.lazy(() =>
  import("./components/Pages/Authentication/ResetPassword/ResetPassword")
);

const Error404 = React.lazy(() =>
  import("./components/Pages/Authentication/404Error/404Error")
);
const Error500 = React.lazy(() =>
  import("./components/Pages/Authentication/500Error/500Error")
);
const Error501 = React.lazy(() =>
  import("./components/Pages/Authentication/501Error/501Error")
);

//Form
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <div >
          <React.Suspense fallback={<Loader />}>
            <Routes>
              {/* Reemplaza tus rutas con PrivateRoute */}
              <Route index element={<MainContainer />} />
              <Route path="/" element={<MainContainer />} />
              <Route path="/auth" element={<Auth />}>
                <Route path="/auth/login" element={<AuthLogin />} />
                <Route path="/auth/signup" element={<AuthSignup />} />
              </Route>

              {/* No uses PrivateRoute aquí, solo usa las rutas normales */}
              <Route path="/" element={<App />}>
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/dashboard/escuelas" element={<PrivateRoute element={<Schools />} />} />
                <Route path="/dashboard/universidades" element={<PrivateRoute element={<Universities />} />} />
                <Route path="/dashboard/profile" element={<PrivateRoute element={<ProfileContainer />} />} />
              </Route>

              <Route path="/" element={<Custompages />}>
                <Route path="/pages/Authentication/sigin" element={<SignIn />} />
                <Route path="/pages/Authentication/sigup" element={<SignUp />} />
                <Route path="/pages/Authentication/forgotpassword" element={<ForgotPassword />} />
                <Route path="/pages/Authentication/resetpassword" element={<ResetPassword />} />
                <Route path="/pages/Authentication/lockscreen" element={<Lockscreen />} />
                <Route path="/pages/Authentication/404error" element={<Error404 />} />
                <Route path="/pages/Authentication/500error" element={<Error500 />} />
                <Route path="*" element={<Error404 />} />
              </Route>

              <Route path="/pages/switcher/switcher-1" element={<Switcherapp />} /> {/* Protege la ruta */}
            </Routes>
          </React.Suspense>
        </div>
      </BrowserRouter>

    </React.Fragment>
  </Provider>
);

reportWebVitals();
