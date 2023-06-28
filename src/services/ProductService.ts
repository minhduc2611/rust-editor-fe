import { Product } from "../shared/models/product";
import { mainApiInstance } from "./Instances";

class ProductService {
  private path = "product/";
  private apiInstance = mainApiInstance;
  getProducts = async () => {
    return await this.apiInstance.get<Product[]>(this.path);
  };
}

const instance = new ProductService();

export default instance;
