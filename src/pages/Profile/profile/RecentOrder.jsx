import { Link } from "react-router-dom";
import { orderHistory } from "../../../constant";

const RecentOrder = () => {
  const orders = orderHistory.slice(0, 6);

  return (
    <div className='border border-gray-100 col-span-full rounded-lg '>
      <h3 className='p-5 border-b flex border-gray-100 text-lg w-full items-center font-medium'>
        Recent Order History
        <Link to={"./order_history"} className='text-primary ml-auto  text-sm'>
          View All
        </Link>
      </h3>
      <table className='w-full'>
        <thead>
          <tr className='bg-gray-50 border-b border-gray-100 text-gray-700 text-xs '>
            <td className='py-4 px-3 md:px-6 text-left text-nowrap'>ORDER ID</td>
            <td className='py-4 px-3 md:px-6 text-left text-nowrap'>DATE</td>
            <td className='py-4 px-3 md:px-6 text-left text-nowrap'>TOTAL</td>
            <td className='py-4 px-3 md:px-6 text-left text-nowrap'>STATUS</td>
            <td className='py-4  text-left tracking-wider'></td>
          </tr>
        </thead>
        <tbody className=''>
          {orders.map(order => (
            <tr key={order.id} className='hover:bg-gray-50/50 transition-colors'>
              <td className='py-5 border-b border-gray-50 md:py-4 px-3 md:px-6 text-gray-800 text-sm'>#{order.id}</td>
              <td className='py-5 border-b border-gray-50 md:py-4 px-3 md:px-6 text-gray-800 text-sm text-nowrap'>{order.date.split(",")[0]}</td>
              <td className='py-5 border-b border-gray-50 md:py-4 px-3 md:px-6 text-gray-800 text-sm'>
                {order.total}{" "}
                <span className='hidden md:inline-block'>
                  ({order.productCount} Product{order.productCount !== 1 ? "s" : ""}){" "}
                </span>
              </td>
              <td className='py-5 border-b border-gray-50 md:py-4 px-3 md:px-6 text-gray-800 text-sm'>{order.status}</td>
              <td className='py-5 border-b border-gray-50 md:py-4  text-gray-800 text-sm'>
                <Link to={`./order_history/${order.id}`} className='text-primary ml-auto  text-sm'>
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
