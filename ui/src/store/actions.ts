import { actions } from "./lib/constants";

export const login = (payload: any) => ({ type: actions.LOGIN, payload });

export const logout = () => ({ type: actions.LOGOUT });

export const addCart = (payload: any) => ({ type: actions.ADD_CART, payload });

export const removeCart = (payload: any) => ({ type: actions.REMOVE_CART, payload });
