import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Loader from "./shade/Loaders/Loaders"
import store from './redux/store/store';
import { Provider } from 'react-redux';
import RoutesConfig from './routes';


//Form
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </React.Suspense>
  </Provider>
);

reportWebVitals();
