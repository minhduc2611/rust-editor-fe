import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { Builder } from "builder-pattern";
import CustomerService from "../services/CustomerService";
import ProductService from "../services/ProductService";
import { Customer, CustomerState } from "../models/customer";
import { Product } from "../models/product";
import ListUtils from "../helpers/listUtils";

export const CustomerStore = atom<Array<CustomerState>>({
  key: "CustomerStore",
  default: [],
});

export function useCustomerStoreActions() {
  const setCustomer = useSetRecoilState(CustomerStore);

  const getCustomers = async () => {
    const customers = await CustomerService.getCustomers();
    const products = await ProductService.getProducts();
    const productsMap = ListUtils.listToMap<Product>(products, "id");
    const a: Array<CustomerState> = customers.map((customer: Customer) => {
      return { ...customer, product: productsMap[customer.product] };
    });
    console.log('a', a);
    
    setCustomer(a);
  };

  const setCustomers = async (customers: Customer) => {};
  return { getCustomers, setCustomers };
}

export const useCustomerStoreValue = () => {
    return useRecoilValue(CustomerStore)
};
