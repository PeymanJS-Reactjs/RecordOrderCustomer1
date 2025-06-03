export function OrderSummary({ orderId, paymentMethod, items }) {
  return (
    <div className="">
      <div className="p-5 border-b border-gray-100 flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">ORDER ID:</p>
          <p className=" text-gray-900">{orderId}</p>
        </div>
        <div className="border-s-2 px-6 border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">PAYMENT METHOD:</p>
          <p className="  text-gray-900">{paymentMethod}</p>
        </div>
      </div>

      <div className="px-5 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${!item.isTotal && "border-b border-gray-100"} flex py-4  justify-between items-center`}
          >
            <span className={`${item.isTotal ? "text-xl font-medium text-gray-900" : " text-gray-600"}`}>
              {item.label}
            </span>
            <span
              className={`${
                item.isTotal ? "text-lg font-bold text-primary-hard" : "font-medium text-sm text-gray-900"
              }`}
            >
              {typeof item.value === "string" ? item.value : `$${item.value.toFixed(2)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
