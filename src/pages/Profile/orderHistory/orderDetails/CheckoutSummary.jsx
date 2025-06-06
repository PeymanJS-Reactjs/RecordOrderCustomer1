import { OrderSummary } from "./OrderSummary";

export default function CheckoutSummary() {
  const orderItems = [
    { label: "Subtotal:", value: 365.0 },
    { label: "Discount", value: "20%" },
    { label: "Shipping", value: "Free" },
    { label: "Total", value: 84.0, isTotal: true },
  ];

  return (
    <div className="mx-auto md:p-5 bg-white">
      <div className="grid md:grid-cols-3 gap-7">
        <div className="flex sm:flex-row flex-col gap-y-2 md:col-span-2">
          {/* Billing Address */}
          <div className="grow border sm:border-r-0 border-gray-100 rounded-md sm:rounded-r-none">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide p-5 border-b border-gray-100">
              BILLING ADDRESS
            </h3>

            <div className="p-5">
              <div>
                <p className="text-lg pb-1 text-gray-900">Dainne Russell</p>
                <p className="text-gray-600 text-sm leading-relaxed">4140 Parker Rd. Allentown, New Mexico 31134</p>
              </div>

              <div className="mt-8">
                <p className="text-xs  text-gray-400 uppercase tracking-wide mb-1">EMAIL</p>
                <p>dainne.ressell@gmail.com</p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">PHONE</p>
                <p>(671) 555-0110</p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className=" border grow border-gray-100 rounded-md sm:rounded-l-none">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide p-5 border-b border-gray-100">
              SHIPPING ADDRESS
            </h3>

            <div className="p-5">
              <div>
                <p className="text-lg pb-1 text-gray-900">Dainne Russell</p>
                <p className="text-gray-600 text-sm leading-relaxed">4140 Parker Rd. Allentown, New Mexico 31134</p>
              </div>

              <div className="mt-8">
                <p className="text-xs  text-gray-400 uppercase tracking-wide mb-1">EMAIL</p>
                <p>dainne.ressell@gmail.com</p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">PHONE</p>
                <p>(671) 555-0110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-100 rounded-md col-span-1 w-full">
          <OrderSummary orderId="#4152" paymentMethod="Paypal" items={orderItems} />
        </div>
      </div>
    </div>
  );
}
