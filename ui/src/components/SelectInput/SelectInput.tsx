import React from "react";
import { styled } from "styles/theme";
import { ISelectInput } from "./SelectInput.interface";

const SelectInput = ({ placeholder, onChange, defaultValue, children }: ISelectInput) => {
    return (
        <StyledLanguageSelect placeholder={placeholder} onChange={onChange} defaultValue={defaultValue}>
            {children}
        </StyledLanguageSelect>
    );
};

const StyledLanguageSelect = styled("select", {
    height: "30px",
    backgroundColor: "transparent",
    paddingBottom: "8px",
    border: 0,
    borderBottom: "2px solid",
    borderBottomColor: "#64738C",
    color: "#121212",
    "&::placeholder": {
        color: "#64738C"
    },
    "&:focus-visible": {
        outline: 0,

        borderBottomColor: "#0DAFC0"
    }
});

export default SelectInput;
