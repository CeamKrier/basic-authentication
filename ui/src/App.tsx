import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Account from "./pages/Account";
import List from "./pages/List";

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<List />} />
                <Route path='account' element={<Account />} />
            </Routes>
        );
    }
}

export default App;
