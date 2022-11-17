
import { IProduct } from "./Product";

export interface IUseStore {
  items:IProduct[]
  total:number
  quantity:number
  addToCart: (param:any) => void;
  updateCart:()=>void
  clearCart:()=>void
  removeFromCart:()=>void
}
export interface IResponse {
  data?: any;
  message: string;
  status: number;
  success: boolean;
  [key: string]: any;
}