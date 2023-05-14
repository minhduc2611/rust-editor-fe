import { Product } from "./product";

export interface Customer {
  createdAt: string;
  name: string;
  avatar: string;
  product: number;
  id: string;
}
export interface CustomerState {
  createdAt: string;
  name: string;
  avatar: string;
  product: Product;
  id: string;
}
