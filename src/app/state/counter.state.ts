export interface CounterState {
    counter: number
    id?: number;
    name: string;
    price?: number;
    description?: string;
}

export const initialState = {
    counter: 5,
    name: ''
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