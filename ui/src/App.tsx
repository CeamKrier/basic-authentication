import { routes } from "pages/lib/constants";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Account from "./pages/Account";
import List from "./pages/List";

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path={routes.list} element={<List />} />
                <Route path={routes.account} element={<Account />} />
            </Routes>
        );
    }
}

export default App;
