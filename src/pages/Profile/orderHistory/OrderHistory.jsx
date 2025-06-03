import { Link } from "react-router-dom";

const OrderHistory = () => {
  const orders = [
    {
      id: "#3933",
      date: "4 Apr, 2021",
      total: "$135.00",
      productCount: 5,
      status: "Processing",
    },
    {
      id: "#5045",
      date: "27 Mar, 2021",
      total: "$25.00",
      productCount: 1,
      status: "on the way",
    },
    {
      id: "#5028",
      date: "20 Mar, 2021",
      total: "$250.00",
      productCount: 4,
      status: "Completed",
    },
    {
      id: "#4600",
      date: "19 Mar, 2021",
      total: "$35.00",
      productCount: 1,
      status: "Completed",
    },
    {
      id: "#4152",
      date: "18 Mar, 2021",
      total: "$578.00",
      productCount: 13,
      status: "Completed",
    },
    {
      id: "#8811",
      date: "10 Mar, 2021",
      total: "$345.00",
      productCount: 7,
      status: "Completed",
    },
    {
      id: "#3536",
      date: "5 Mar, 2021",
      total: "$560.00",
      productCount: 2,
      status: "Completed",
    },
    {
      id: "#1374",
      date: "27 Feb, 2021",
      total: "$560.00",
      productCount: 2,
      status: "Completed",
    },
    {
      id: "#7791",
      date: "25 Feb, 2021",
      total: "$560.00",
      productCount: 2,
      status: "Completed",
    },
    {
      id: "#4846",
      date: "24 Feb, 2021",
      total: "$23.00",
      productCount: 1,
      status: "Completed",
    },
    {
      id: "#5948",
      date: "20 Feb, 2021",
      total: "$23.00",
      productCount: 1,
      status: "Completed",
    },
    {
      id: "#1577",
      date: "12 Oct, 2020",
      total: "$23.00",
      productCount: 1,
      status: "Completed",
    },
  ];

  return (
    <div className="border border-gray-100 col-span-7 rounded-lg ">
      <h3 className="p-5 border-b  border-gray-100 text-lg w-full font-medium">Order History</h3>
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
              <td className="py-3 px-6 text-gray-800 text-sm">{order.id}</td>
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

export default OrderHistory;
