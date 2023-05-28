import { Product } from "./product";

export interface Customer {
  createdAt: string;
  name: string;
  avatar: string;
  product: number;
  id: string;
}

export interface CustomerWithProduct {
  createdAt: string;
  name: string;
  avatar: string;
  product: Product;
  id: string;
}

export interface CustomerStoreModal {
  customers: CustomerWithProduct[];
}
