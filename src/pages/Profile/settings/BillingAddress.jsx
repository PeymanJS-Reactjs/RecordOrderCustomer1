const BillingAddress = () => {
  return (
    <section className="rounded-lg mb-6 border border-gray-100">
      <h3 className="p-5 border-b border-gray-100 text-lg font-medium">Billing Address</h3>
      <div className="p-5 grid grid-cols-6 gap-2">
        <div className="col-span-2">
          <label className="text-sm">First Name</label>
          <input
            type="text"
            value={"Dianne"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Last Name</label>
          <input
            type="text"
            value={"Russell"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">
            Company Name <span className="text-xs text-gray-500 ">(optional)</span>
          </label>
          <input
            type="text"
            value={"Zakirsoft"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Street Address</label>
          <input
            type="text"
            value={"Zakirsoft"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Country / Region</label>

          {/* TODO: select */}
          <input
            type="text"
            value={"United States"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">States</label>
          {/* TODO: select */}
          <input
            type="text"
            value={"Washington DC"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Zip Code</label>
          <input
            type="text"
            value={"20033"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-3">
          <label className="text-sm">Email</label>
          <input
            type="text"
            value={"dianne.russell@gmail.com"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="col-span-3">
          <label className="text-sm">Phone</label>
          <input
            type="text"
            value={"(603) 555-0123"}
            className="w-full border mt-1 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="col-span-6">
          <button className="px-7 py-3 text-sm rounded-full bg-primary hover:bg-primary/80 text-white">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
