import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { AppRoutes } from './routes/AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

reportWebVitals();
