import React, { useEffect, useReducer, useState } from "react";

import Layout from "components/Layout";
import { styled } from "styles/theme";
import { StyledDefaultContainer } from "styles/theme/common";
import Signup from "forms/Signup";

import useProvider from "hooks/useProvider";

const Account = () => {
    const { state } = useProvider();

    return (
        <Layout>
            <StyledAccountContainer>{state.user ? <div>Account Page</div> : <Signup />}</StyledAccountContainer>
        </Layout>
    );
};

const StyledAccountContainer = styled(StyledDefaultContainer, {
    marginTop: "92px"
});

export default Account;
