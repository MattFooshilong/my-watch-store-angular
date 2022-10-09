export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  strapColor?: string | null;
  dialSize?: string | null;
  quantity?: number;
  cartItemID?: string | null
}

export const products = [
  {
    id: 0,
    name: 'Apple Watch 8',
    price: 1399,
    description: 'A smart watch with one of the best screens'
  },
  {
    id: 1,
    name: 'Rolex Duo',
    price: 14999,
    description: 'A great watches that comes in pair of ocean blue and space black'
  },
  {
    id: 2,
    name: 'Rolex Black Gold',
    price: 200000,
    description: 'Beautiful classic gold on black'
  },
  {
    id: 3,
    name: 'Farer Casual Back',
    price: 700,
    description: 'A watch that you can wear on smart casual days'
  },
  {
    id: 4,
    name: 'White Gold Omega',
    price: 8000,
    description: 'White classic gold that brings a touch of elegance and class'
  },
  {
    id: 5,
    name: 'Silver Age',
    price: 80,
    description: 'All silver, all you'
  },
  {
    id: 6,
    name: 'The Perfectionist',
    price: 200,
    description: 'Take charge of your time right down to the milliseconds'
  },
  {
    id: 7,
    name: 'The Masterpiece',
    price: 200,
    description: 'The masterpiece, no words needed'
  }
];
