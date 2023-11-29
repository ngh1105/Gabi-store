import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from 'routes';
import store from "app/store";
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "index.css";
import TokenGuard from 'components/token-guard';
import "react-multi-carousel/lib/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <TokenGuard>
                <AppRoutes />
            </TokenGuard>
        </BrowserRouter>
        <ToastContainer pauseOnHover={false} />
    </Provider>
);