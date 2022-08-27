import { actions } from "./lib/constants";

export const login = (payload: any) => ({ type: actions.LOGIN, payload });

export const logout = () => ({ type: actions.LOGOUT });
