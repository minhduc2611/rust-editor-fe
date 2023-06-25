import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { Builder } from 'builder-pattern';
import CustomerService from '../services/CustomerService';
import ProductService from '../services/ProductService';
import { Customer, CustomerStoreModal, CustomerWithProduct } from '../shared/models/customer';
import { Product } from '../shared/models/product';
import ListUtils from '../helpers/listUtils';

export const CustomerStore = atom<CustomerStoreModal>({
    key: 'CustomerStore',
    default: Builder<CustomerStoreModal>().customers([]).build(),
});

// Store actions should be here in store file
export function useCustomerStoreActions() {
    const setCustomerStore = useSetRecoilState(CustomerStore);

    const getCustomers = async () => {
        const customers = await CustomerService.getCustomers();

        const products = await ProductService.getProducts();

        // map products to customer
        const productsMap = ListUtils.listToMap<Product>(products, 'id');

        const customersWithProduct: CustomerWithProduct[] = customers.map((customer: Customer) => {
            return { ...customer, product: productsMap[customer.product] };
        });

        setCustomerStore({ customers: customersWithProduct });
    };

    const updateCustomer = async (customers: Customer) => {
        // code here
    };

    const setCustomers = async (customers: Customer) => {
        // code here
    };

    return { getCustomers, setCustomers, updateCustomer };
}

export const useCustomerStoreValue = () => {
    return useRecoilValue(CustomerStore);
};
