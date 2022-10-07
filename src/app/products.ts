export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
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
  }
];
