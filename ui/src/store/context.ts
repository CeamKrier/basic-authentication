import { createContext } from "react";

interface IGlobalState {
    user: Object | undefined;
}

interface IContext {
    state: IGlobalState;
    dispatch: React.Dispatch<any>;
}

export const Context = createContext<IContext>({
    state: {
        user: undefined
    },
    dispatch: () => {}
});
