import React, { LazyExoticComponent } from "react";
type JSXComponent = () => JSX.Element;

export interface LazyRoute {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent | any;
}

const Dashboard = React.lazy(() => import("../containers/Dashboard"));


//pages
const SignUp = React.lazy(() => import("./../components/Pages/Authentication/SignUp/SignUp"));
const SignIn = React.lazy(() =>
  import("./../components/Pages/Authentication/SignIn/SignIn")
);
const ForgotPassword = React.lazy(() =>
  import("./../components/Pages/Authentication/ForgotPassword/ForgotPassword")
);
const Lockscreen = React.lazy(() =>
  import("./../components/Pages/Authentication/Lockscreen/Lockscreen")
);
const ResetPassword = React.lazy(() =>
  import("./../components/Pages/Authentication/ResetPassword/ResetPassword")
);
const UnderConstruction = React.lazy(() =>
  import(
    "./../components/Pages/Authentication/UnderConstruction/UnderConstruction"
  )
);

//status errors 
const Error404 = React.lazy(() =>
  import("./../components/Pages/Authentication/404Error/404Error")
);
const Error500 = React.lazy(() =>
  import("./../components/Pages/Authentication/500Error/500Error")
);

//Auth
const AuthLogin = React.lazy(() => import("./../Authentication/Login"));
const AuthSignup = React.lazy(() => import("./../Authentication/Signup"))


export const authRoutes: LazyRoute[] = [
  {
    path: ``,
    Component: AuthLogin
  },
  {
    path: `login`,
    Component: AuthLogin
  },
  {
    path: `signup`,
    Component: AuthSignup
  }
]

export const mainRoutes: LazyRoute[] = [

]

export const appRoutes: LazyRoute[] = [
  {
    path: ``,
    Component: Dashboard
  },
  {
    path: `/inicio`,
    Component: Dashboard
  }
]

export const customPagesRoutes: LazyRoute[] = [
  {
    path: `pages/Authentication/sigin`,
    Component: SignIn
  },
  {
    path: `pages/Authentication/sigup`,
    Component: SignUp
  },
  {
    path: `pages/Authentication/forgotpassword`,
    Component: ForgotPassword
  },
  {
    path: `pages/Authentication/resetpassword`,
    Component: ResetPassword
  },
  {
    path: `pages/Authentication/lockscreen`,
    Component: Lockscreen
  },
  {
    path: `pages/Authentication/underconstruction`,
    Component: UnderConstruction
  },
  {
    path: `pages/Authentication/404error`,
    Component: Error404
  },
  {
    path: `pages/Authentication/500error`,
    Component: Error500
  },
  {
    path: `*`,
    Component: Error404
  }
];