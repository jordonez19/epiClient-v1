import React from "react";
import { Outlet } from "react-router-dom";
import Custompagesswitcher from "../../components/Pages/Switcher/custompagesswitcher/custompagesswitcher";
import { Provider } from "react-redux";
import Store from "../../redux/store/store"

export default function Custompages() {

    return (
        <Provider store={Store}>
            <React.Fragment>
                <Custompagesswitcher />
                <Outlet />
            </React.Fragment>
        </Provider>
    );
}


