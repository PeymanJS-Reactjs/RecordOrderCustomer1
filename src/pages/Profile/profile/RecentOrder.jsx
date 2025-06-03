import { Link } from "react-router-dom";

const RecentOrder = () => {
  const orders = [
    {
      id: "#738",
      date: "8 Sep, 2020",
      total: "$135.00",
      productCount: 5,
      status: "Processing",
    },
    {
      id: "#703",
      date: "24 May, 2020",
      total: "$25.00",
      productCount: 1,
      status: "on the way",
    },
    {
      id: "#130",
      date: "22 Oct, 2020",
      total: "$250.00",
      productCount: 4,
      status: "Completed",
    },
    {
      id: "#561",
      date: "1 Feb, 2020",
      total: "$35.00",
      productCount: 1,
      status: "Completed",
    },
    {
      id: "#536",
      date: "21 Sep, 2020",
      total: "$578.00",
      productCount: 13,
      status: "Completed",
    },
    {
      id: "#492",
      date: "22 Oct, 2020",
      total: "$345.00",
      productCount: 7,
      status: "Completed",
    },
  ];

  return (
    <div className='border border-gray-100 col-span-7 rounded-lg '>
      <h3 className='p-5 border-b flex border-gray-100 text-lg w-full items-center font-medium'>
        Recent Order History
        <Link to={"./order_history"} className='text-primary ml-auto  text-sm'>
          View All
        </Link>
      </h3>
      <table className='w-full'>
        <thead>
          <tr className='bg-gray-50 border-b border-gray-100 text-gray-700 text-xs '>
            <td className='py-3 px-6 text-left tracking-wider'>ORDER ID</td>
            <td className='py-3 px-6 text-left tracking-wider'>DATE</td>
            <td className='py-3 px-6 text-left tracking-wider'>TOTAL</td>
            <td className='py-3 px-6 text-left tracking-wider'>STATUS</td>
            <td className='py-3  text-left tracking-wider'></td>
          </tr>
        </thead>
        <tbody className="">
          {orders.map(order => (
            <tr key={order.id} className='hover:bg-gray-50/50 transition-colors'>
              <td className='py-3 px-6 text-gray-800 text-sm'>{order.id}</td>
              <td className='py-3 px-6 text-gray-800 text-sm'>{order.date}</td>
              <td className='py-3 px-6 text-gray-800 text-sm'>
                {order.total} ({order.productCount} Product{order.productCount !== 1 ? "s" : ""})
              </td>
              <td className='py-3 px-6 text-gray-800 text-sm'>{order.status}</td>
              <td className='py-3  text-gray-800 text-sm'>
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
