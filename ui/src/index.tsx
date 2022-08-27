import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "store/provider";

const App = React.lazy(() => import("./App"));

import "styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider>
                <React.Suspense fallback={<div>Loading</div>}>
                    <App />
                </React.Suspense>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
