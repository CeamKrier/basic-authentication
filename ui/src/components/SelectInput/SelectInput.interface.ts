import { ChangeEventHandler, ReactElement } from "react";

export interface ISelectInput {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    defaultValue?: string;
    children: ReactElement | ReactElement[];
}
