import { createContext } from "react";
import { IContext } from "./lib/store.interface";

export const Context = createContext<IContext>({
    state: {
        user: undefined,
        cart: []
    },
    dispatch: () => {}
});
