import React, { ReactElement, useReducer } from "react";
import { Context } from "./context";

import { actions } from "./lib/constants";

interface IGlobalState {
    user: Object | undefined;
}

interface IAction {
    type: string;
    payload: Object;
}

const initialState: IGlobalState = {
    user: undefined
};

const reducer = (state: IGlobalState, action: IAction) => {
    switch (action.type) {
        case actions.LOGIN:
            state.user = action.payload;
            return Object.assign({}, state);
        case actions.LOGOUT:
            state.user = undefined;
            return Object.assign({}, state);
        default:
            return state;
    }
};

interface IProvider {
    children?: ReactElement;
}

export const Provider = ({ children }: IProvider) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
