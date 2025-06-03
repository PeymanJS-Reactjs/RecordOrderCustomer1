import { Link } from "react-router-dom";
import { orderHistory } from "../../../constant";

const RecentOrder = () => {
  const orders = orderHistory.slice(0, 6);

  return (
    <div className="border border-gray-100 col-span-7 rounded-lg ">
      <h3 className="p-5 border-b flex border-gray-100 text-lg w-full items-center font-medium">
        Recent Order History
        <Link to={"./order_history"} className="text-primary ml-auto  text-sm">
          View All
        </Link>
      </h3>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-gray-700 text-xs ">
            <td className="py-3 px-6 text-left tracking-wider">ORDER ID</td>
            <td className="py-3 px-6 text-left tracking-wider">DATE</td>
            <td className="py-3 px-6 text-left tracking-wider">TOTAL</td>
            <td className="py-3 px-6 text-left tracking-wider">STATUS</td>
            <td className="py-3  text-left tracking-wider"></td>
          </tr>
        </thead>
        <tbody className="">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="py-3 px-6 text-gray-800 text-sm">#{order.id}</td>
              <td className="py-3 px-6 text-gray-800 text-sm">{order.date}</td>
              <td className="py-3 px-6 text-gray-800 text-sm">
                {order.total} ({order.productCount} Product{order.productCount !== 1 ? "s" : ""})
              </td>
              <td className="py-3 px-6 text-gray-800 text-sm">{order.status}</td>
              <td className="py-3  text-gray-800 text-sm">
                <Link to={`./order_history/${order.id}`} className="text-primary ml-auto  text-sm">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrder;
