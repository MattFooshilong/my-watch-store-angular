export interface CounterState {
    counter: number
}

export const initialState = {
    counter: 5
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    strapColor?: number | null;
    dialSize?: number | null;
    quantity?: number;
}