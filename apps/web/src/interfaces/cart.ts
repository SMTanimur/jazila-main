import { IProduct } from './Product';

export interface CartItemPayload {
  product: IProduct;
  quantity?: number;
}
export interface ICartItem {
  product: IProduct;
  price: number;
  quantity: number;
  total: number;
}
export interface ICart {
  items: ICartItem[];
  quantity: number;
  total: number;
}
export interface ICartState extends ICart {
  lastItemId: number;
}

