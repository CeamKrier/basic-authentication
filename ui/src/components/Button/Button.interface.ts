import { MouseEventHandler, ReactElement } from "react";

export interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    variant?: "primary" | "secondary" | "tertiary";
    children: ReactElement | ReactElement[] | string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
