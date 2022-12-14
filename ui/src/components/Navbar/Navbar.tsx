import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { INavbar } from "./Navbar.interface";
import { routes } from "pages/lib/constants";

import { ReactComponent as ListIcon } from "assets/icons/list.svg";
import { ReactComponent as AccountIcon } from "assets/icons/account.svg";
import { StyledDefaultContainer } from "styles/theme/common";
import { styled } from "styles/theme";

const Navbar = ({}: INavbar) => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <StyledNavbar>
            <NavbarContainer>
                <StyledLink className={location?.pathname === routes.list ? "active-link" : ""} to={routes.list}>
                    <StyledLinkContainer>
                        <ListIcon />
                        {t("keyNavList")}
                    </StyledLinkContainer>
                </StyledLink>
                <StyledLink className={location?.pathname === routes.account ? "active-link" : ""} to={routes.account}>
                    <StyledLinkContainer>
                        <AccountIcon />
                        {t("keyNavAccount")}
                    </StyledLinkContainer>
                </StyledLink>
            </NavbarContainer>
        </StyledNavbar>
    );
};

const StyledNavbar = styled("nav", {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw",
    height: "88px",
    backgroundColor: "rgba(250, 250, 250, 1)"
});

const StyledLinkContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "48px",
    justifyContent: "space-between"
});

const StyledLink = styled(Link, {
    fontWeight: 400,
    color: "rgba(0, 0, 0, 1)",
    textDecoration: "none",

    "&.active-link": {
        fontWeight: 600
    }
});

const NavbarContainer = styled(StyledDefaultContainer, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "90px",
    height: "100%"
});

export default Navbar;
