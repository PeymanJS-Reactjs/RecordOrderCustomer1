import { Link, useParams } from "react-router-dom";
import { orderHistory, OrderProducts, OrderTrackerSteps } from "../../../../constant";
import { DotIcon } from "lucide-react";
import CheckoutSummary from "./CheckoutSummary";
import OrderTracker from "./OrderTracker";
import ProductSummary from "./ProductsSummary";

const OrderDetails = () => {
  const { orderId } = useParams();
  const OrderSteps = OrderTrackerSteps;
  const orderProducts = OrderProducts;
  const order = orderHistory.find((r) => r.id === orderId);

  if (!order)
    return (
      <div className="border border-gray-100 col-span-7 rounded-lg h-full ">
        <h3 className="p-5 border-b flex border-gray-100 text-lg w-full items-center font-medium">Order Details</h3>

        <div className="flex items-center flex-col h-2/3 justify-center gap-2">
          <p className="text-gray-700 text-lg mx-auto text-center">Order ID not found or invalid.</p>
          <Link to={"../"} className="btn mx-auto text-center">
            Back to Profile
          </Link>
        </div>
      </div>
    );

  return (
    <div className="border border-gray-100 col-span-7 rounded-lg">
      <div className="p-5 border-b border-gray-100 w-full text-gray-700  flex items-center">
        <h3 className="font-medium  text-xl text-gray-900">Order Details</h3>
        <DotIcon className="text-inherit" />
        <p className="text-sm text-inherit">{order.date}</p>
        <DotIcon className="text-inherit" />
        <p className="text-sm font-normal text-inherit">
          {order.productCount} Product{order.productCount !== 1 ? "s" : ""}
        </p>
        <Link to={"../order_history"} className="text-primary ml-auto">
          Back to List
        </Link>
      </div>

      <div className="">
        <CheckoutSummary />
        <OrderTracker steps={OrderSteps} />
        <ProductSummary orders={orderProducts} />
      </div>
    </div>
  );
};

export default OrderDetails;
