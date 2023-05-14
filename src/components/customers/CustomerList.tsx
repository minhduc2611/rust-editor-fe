"use client";
import { useCustomers } from "@/hooks/useCustomers";
import CustomerListItem from "./CustomerListItem";

export default function CustomerList() {
  const { customers } = useCustomers();
  
  return (
    <>
      {customers.map((customer) => {
        return (<CustomerListItem customer={customer}  key={customer.id}></CustomerListItem>)
      })}
    </>
  );
}
