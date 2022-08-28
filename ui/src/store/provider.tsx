import React, { ReactElement, useReducer } from "react";
import { Context } from "./context";

import { actions } from "./lib/constants";
import { IAction, ICart, IGlobalState, IUser } from "./lib/store.interface";

const initialState: IGlobalState = {
    user: undefined,
    cart: []
};

const reducer = (state: IGlobalState, action: IAction) => {
    switch (action.type) {
        case actions.LOGIN:
            state.user = action.payload as IUser;
            return Object.assign({}, state);
        case actions.LOGOUT:
            state.user = undefined;
            return Object.assign({}, state);
        case actions.ADD_CART:
            state.cart.push(action.payload as ICart);
            return Object.assign({}, state);
        case actions.REMOVE_CART:
            const index = state.cart.indexOf(action.payload as ICart);
            if (index > -1) {
                state.cart.splice(index, 1);
            }
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
