import React from "react";

import Navbar from "components/Navbar";

import { ILayout } from "./Layout.interface";
import { styled } from "styles/theme";

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <StyledMain>{children}</StyledMain>
            <Navbar />
        </>
    );
};

const StyledMain = styled("main", {
    minHeight: "100vh"
});

export default Layout;
