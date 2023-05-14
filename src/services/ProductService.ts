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
