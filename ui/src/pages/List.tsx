import React from "react";

import Layout from "components/Layout";
import { styled } from "styles/theme";
import { StyledDefaultContainer } from "styles/theme/common";

const List = () => {
    return (
        <Layout>
            <StyledListContainer>List</StyledListContainer>
        </Layout>
    );
};

const StyledListContainer = styled(StyledDefaultContainer, {});

export default List;
