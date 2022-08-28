import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Layout from "components/Layout";
import { styled } from "styles/theme";
import { StyledDefaultContainer } from "styles/theme/common";
import Signup from "forms/Signup";

import useProvider from "hooks/useProvider";
import { LocalStorageKeys } from "utils/constants";
import { login, logout } from "store/actions";
import SelectInput from "components/SelectInput";
import Button from "components/Button";

const Account = () => {
    const { state, dispatch } = useProvider();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const existingUser = localStorage.getItem(LocalStorageKeys.user);
        if (existingUser) {
            dispatch(login(JSON.parse(existingUser)));
        }
    }, [dispatch]);

    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const pickedLocale = e.target.value;
        i18n.changeLanguage(pickedLocale);
    };

    const handleLogout = (event: MouseEvent<HTMLButtonElement>) => {
        localStorage.removeItem(LocalStorageKeys.user);
        dispatch(logout());
    };

    return (
        <Layout>
            <StyledAccountContainer>
                <StyledPageHeader>{t("keyAccount")}</StyledPageHeader>
                {!state.user && <Signup />}
                {state.user && (
                    <StyledAccountDetailsContainer>
                        <StyledUsername>John Doe</StyledUsername>
                        <StyledUserDetail>
                            {t("keyEmail")}: {state.user?.email}
                        </StyledUserDetail>
                        <StyledUserDetail>
                            {t("keyPassword")}: {state.user?.password}
                        </StyledUserDetail>
                        <StyledUserDetail>
                            {t("keyCurrentLocale")}: {i18n.language}
                        </StyledUserDetail>
                        <SelectInput onChange={handleLocaleChange} defaultValue={i18n.language}>
                            <option value='us' label='English'>
                                English
                            </option>
                            <option value='tr' label='Türkçe'>
                                Türkçe
                            </option>
                        </SelectInput>
                        <StyledBottomRow>
                            <Button variant='secondary' onClick={handleLogout}>
                                {t("keyLogout")}
                            </Button>
                        </StyledBottomRow>
                    </StyledAccountDetailsContainer>
                )}
            </StyledAccountContainer>
        </Layout>
    );
};

const StyledAccountContainer = styled(StyledDefaultContainer, {
    marginTop: "92px"
});

const StyledPageHeader = styled("h3", {
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "42px",
    letterSpacing: "0.1px",
    marginBottom: "32px"
});

const StyledUsername = styled("h3", {
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "49.1px",
    letterSpacing: "0.1px",
    marginBottom: "32px",
    marginTop: 0
});

const StyledUserDetail = styled("p", {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "29px",
    letterSpacing: "0.04em",
    marginTop: 0,
    marginBottom: "16px"
});

const StyledAccountDetailsContainer = styled("div", {
    display: "flex",
    flexDirection: "column"
});

const StyledBottomRow = styled("div", {
    position: "absolute",
    bottom: "88px",
    width: "-webkit-fill-available",
    paddingRight: "24px",
    backgroundColor: "White",
    paddingBottom: "17px"
});

export default Account;
