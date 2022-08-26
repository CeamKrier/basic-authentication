import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));
import Spinner from "components/Spinner";

import "styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <React.Suspense fallback={<Spinner />}>
                <App />
            </React.Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
