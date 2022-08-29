import React from "react";

import { IButton } from "./Button.interface";
import { styled } from "styles/theme";

const Button = ({ type, children, onClick, variant, disabled }: IButton) => {
    return (
        <StyledButton type={type} className={variant} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled("button", {
    borderRadius: "12px",
    backgroundColor: "#E82223",
    height: "56px",
    border: 0,
    width: "100%",

    "&:disabled": {
        backgroundColor: "#BBC3CF",
        color: "White"
    },
    "&.primary": {
        color: "White"
    },
    "&.secondary": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "rgba(232, 34, 35, 1)"
    },
    "&.tertiary": {
        backgroundColor: "transparent",
        width: "unset",
        display: "flex",
        alignItems: "center",
        color: "#E82223",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.9px"
    }
});

export default Button;
