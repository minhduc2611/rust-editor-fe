import { mainApiInstance } from "./Instances";

class CustomerService {
  path = "cus/";
  apiInstance = mainApiInstance;

  getCustomer = async (id: string) => {
    return await this.apiInstance.get(this.path + id);
  }
  getCustomers = async (id: string) => {
    return await this.apiInstance.get(this.path);
  }
}

const instance = new CustomerService();
export default instance;

// CUSTOMER=https://5bf0b7fb0756d20013119887.mockapi.io/api/dealers/search/cus
// PRODUCT=https://5bf0b7fb0756d20013119887.mockapi.io/api/dealers/search/product
