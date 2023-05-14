import {
  useCustomerStoreActions,
  useCustomerStoreValue,
} from "@/stores/customers";
import { useEffect } from "react";

export function useCustomers() {
  const customers = useCustomerStoreValue();
  const { getCustomers } = useCustomerStoreActions();

  useEffect(() => {
    getCustomers();
  }, []);

  return { customers };
}
