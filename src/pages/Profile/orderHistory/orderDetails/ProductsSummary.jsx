const ProductSummary = ({ orders }) => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-gray-700 text-xs ">
            <td className="py-4 px-2 md:px-6 text-left tracking-wider">PRODUCT</td>
            <td className="py-4 px-2 md:px-6 text-left tracking-wider">PRICE</td>
            <td className="py-4 px-2 md:px-6 text-left tracking-wider">QUANTITY</td>
            <td className="py-4 px-2 md:px-6 text-left tracking-wider">SUBTOTAL</td>
          </tr>
        </thead>
        <tbody className="">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-4 px-2 md:px-6 text-gray-800 text-nowrap text-sm flex items-center gap-1">
                <img className="size-10 sm:size-16 object-cover" src={order.image} alt={order.name} /> {order.name}
              </td>
              <td className="py-4 px-2 md:px-6 text-gray-800 text-sm">${order.price.toFixed(2)}</td>
              <td className="py-4 px-2 md:px-6 text-gray-800 text-sm">x{order.quantity}</td>
              <td className="py-4 px-2 md:px-6 text-gray-800 font-medium text-sm">${order.subtotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSummary;
