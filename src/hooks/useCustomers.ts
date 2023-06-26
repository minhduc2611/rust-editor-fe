import { useCustomerStoreActions, useCustomerStoreValue } from '@/stores/customers';

// reference: ST8: 1 store property ứng với 1 hook
export function useCustomers() {
    const { customers } = useCustomerStoreValue();
    const { getCustomers, setCustomers, updateCustomer } = useCustomerStoreActions();

    // reference: ST7: hạn chế call API useEffect trong custom hook
    console.log('customers', customers);
    return { customers, getCustomers, setCustomers, updateCustomer };
}
