import { CustomerWithProduct } from "@/shared/models/customer";
export default function CustomerListItem({
    customer,
}: {
    customer: CustomerWithProduct;
}) {
    return (
        <div>
            <p>
                {customer.id} - {customer.name} - Registered At{" "}
                {customer.createdAt}
            </p>
            <p>
                Bought <b>{customer.product.product_name}</b> at{" "}
                {customer.product.createdAt}
            </p>
        </div>
    );
}
