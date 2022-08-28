export interface IListContent {
    id: string;
    title: string;
    description: string;
    rating: string;
    distance: string;
    imageSource: string;
    price: number;
}

export interface IRowListing {
    contents: Array<IListContent>;
    onPick: (value: IListContent) => void;
}
