export type IUser = {
    email: string;
    password: string;
};

export type ICart = {
    id: string;
    title: string;
    description: string;
    rating: string;
    distance: string;
    imageSource: string;
    price: number;
};

export interface IGlobalState {
    user: IUser | undefined;
    cart: Array<ICart | null>;
}

export interface IAction {
    type: string;
    payload: IUser | ICart;
}

export interface IContext {
    state: IGlobalState;
    dispatch: React.Dispatch<any>;
}
