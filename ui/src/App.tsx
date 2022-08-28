import { routes } from "pages/lib/constants";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Account = React.lazy(() => import("./pages/Account"));
const List = React.lazy(() => import("./pages/List"));
class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route
                    path={routes.list}
                    element={
                        <React.Suspense fallback={<div>Loading</div>}>
                            <List />
                        </React.Suspense>
                    }
                />
                <Route
                    path={routes.account}
                    element={
                        <React.Suspense fallback={<div>Loading</div>}>
                            <Account />
                        </React.Suspense>
                    }
                />
            </Routes>
        );
    }
}

export default App;
