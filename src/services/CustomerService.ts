import { Customer } from "../shared/models/customer";
import { mainApiInstance } from "./Instances";

class CustomerService {
  private path = "cus/";
  private apiInstance = mainApiInstance;

  getCustomer = async (id: string) => {
    return await this.apiInstance.get(this.path + id);
  };
  getCustomers = async () => {
    return await this.apiInstance.get<Customer[]>(this.path);
  };
}

const instance = new CustomerService();
export default instance;
