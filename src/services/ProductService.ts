import { Product } from "../models/product";
import { mainApiInstance } from "./Instances";

class ProductService {
  path = "product/";
  apiInstance = mainApiInstance;
  getProducts = async () => {
    return await this.apiInstance.get<Product[]>(this.path);
  };
}

const instance = new ProductService();

export default instance;

// CUSTOMER=https://5bf0b7fb0756d20013119887.mockapi.io/api/dealers/search/cus
// PRODUCT=https://5bf0b7fb0756d20013119887.mockapi.io/api/dealers/search/product
