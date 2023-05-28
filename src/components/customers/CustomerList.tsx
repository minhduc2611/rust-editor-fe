"use client";
import { useCustomers } from "@/hooks/useCustomers";
import CustomerListItem from "./CustomerListItem";
import { useEffect } from "react";

export default function CustomerList() {
  const { customers, getCustomers } = useCustomers();
  
  useEffect(() => {
    getCustomers();
  }, [])

  return (
    <>
      {customers.map((customer) => {
        return (<CustomerListItem customer={customer}  key={customer.id}></CustomerListItem>)
      })}
    </>
  );
}
