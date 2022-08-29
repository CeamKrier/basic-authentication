import { routes } from "pages/lib/constants";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { styled } from "styles/theme";

const Account = React.lazy(() => import("./pages/Account"));
const List = React.lazy(() => import("./pages/List"));
class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route
                    path={routes.list}
                    element={
                        <React.Suspense fallback={<StyledLoadingNotifier>Loading</StyledLoadingNotifier>}>
                            <List />
                        </React.Suspense>
                    }
                />
                <Route
                    path={routes.account}
                    element={
                        <React.Suspense fallback={<StyledLoadingNotifier>Loading</StyledLoadingNotifier>}>
                            <Account />
                        </React.Suspense>
                    }
                />
            </Routes>
        );
    }
}

const StyledLoadingNotifier = styled("div", {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

export default App;
