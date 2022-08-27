import React from "react";

import Navbar from "components/Navbar";
import { styled } from "styles/theme";

import { ILayout } from "./Layout.interface";

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <StyledMain>{children}</StyledMain>
            <Navbar />
        </>
    );
};

const StyledMain = styled("main", {
    minHeight: "100vh",
    "@md": {},
    "@lg": {},
    "@xl": {}
});

export default Layout;
