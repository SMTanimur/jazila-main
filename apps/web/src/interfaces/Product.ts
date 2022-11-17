export interface IProduct {
  productImgs: string[];
  name: string;
  slug?: string;
  discount?: number;
  ratings: number;
  price: number;
  stocks: number;
  descriptions: string;
  brand: any;
  quantity?: number;
  category: any;
  size: string;
  _id: any;
}
