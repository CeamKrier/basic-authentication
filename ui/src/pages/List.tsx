import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import Layout from "components/Layout";
import { styled } from "styles/theme";
import { StyledDefaultContainer } from "styles/theme/common";
import RowListing from "components/Listings/RowListing";
import { IListContent } from "components/Listings/RowListing/RowListing.interface";
import useProvider from "hooks/useProvider";
import { addCart } from "store/actions";
import apiClient from "services/api";
import { apiPaths } from "services/lib/constants";

const List = () => {
    const { dispatch, state } = useProvider();
    const { t } = useTranslation();

    const [listings, setListings] = useState<Array<IListContent>>([]);

    const fetchListings = useCallback(async () => {
        try {
            const response = (await apiClient.get(apiPaths.getListings)).data;
            setListings(response);
        } catch (error) {}
    }, []);

    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    const cartTotal = useMemo(() => {
        if (state.cart.length) {
            return state.cart.map(item => item?.price).reduce((x, y) => x! + y!, 0);
        }
        return 0;
    }, [state.cart.length]);

    const handleCartUpdate = (item: IListContent) => {
        dispatch(addCart(item));
    };

    return (
        <Layout>
            <StyledListContainer>
                <RowListing contents={listings} onPick={handleCartUpdate} />
                <StyledCartTotalTitle>{t("keyCartDetails")}:</StyledCartTotalTitle>
                <StyledCartDetailText>
                    {t("keyCartTotal")}: {cartTotal}
                </StyledCartDetailText>
                <StyledCartDetailText>
                    {t("keyTaxShipment")}: {(cartTotal! * 18) / 100}
                </StyledCartDetailText>
                <StyledCartGrandTotalText>
                    {t("keyGrandTotal")}: {(cartTotal! * 118) / 100}
                </StyledCartGrandTotalText>
            </StyledListContainer>
        </Layout>
    );
};

const StyledListContainer = styled(StyledDefaultContainer, {});

const StyledCartTotalTitle = styled("h3", {
    fontWeight: 700,
    fontSize: "24px",
    letterSpacing: "0.1px"
});

const StyledCartDetailText = styled("p", {
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "4%"
});

const StyledCartGrandTotalText = styled("p", {
    fontWeight: 700,
    fontSize: "18px",
    letterSpacing: "4%"
});

export default List;
