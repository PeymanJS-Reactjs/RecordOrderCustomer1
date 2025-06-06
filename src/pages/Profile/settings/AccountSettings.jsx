const AccountSettings = () => {
  return (
    <section className="rounded-lg mb-6 md:border border-gray-100">
      <h3 className="p-4 md:border-b border-gray-100 text-lg font-medium">Account Settings</h3>
      <div className="p-5 grid md:grid-cols-5 gap-2">
        <div className="md:col-span-3">
          {/* left */}
          <label className="text-sm">First Name</label>
          <input
            type="text"
            defaultValue={"Dianne"}
            className="w-full border mt-1 mb-4 focus:text-gray-900  text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
          <label className="text-sm">Last Name</label>
          <input
            type="text"
            defaultValue={"Russell"}
            className="w-full border mt-1 mb-4 focus:text-gray-900 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
          <label className="text-sm">Email</label>
          <input
            type="text"
            defaultValue={"dianne.russell@gmail.com"}
            className="w-full border mt-1 mb-4 focus:text-gray-900 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all"
          />
          <label className="text-sm">Phone Number</label>
          <input
            type="text"
            defaultValue={"(603) 555-0123"}
            className="w-full border mt -1 mb-4 focus:text-gray-900 text-gray-600 rounded-md border-gray-100 p-3 outline-none focus:border-gray-300"
          />
          <button className="px-7 py-2.5  text-sm rounded-full bg-primary hover:bg-primary/80 text-white">
            Save Changes
          </button>
        </div>
        <div className="flex text-center items-center justify-center grow md:col-span-2 -order-1 md:order-2">
          <div className="pb-10">
            <img
              src="/images/eProf.jpg"
              alt="profile"
              width={128}
              height={128}
              className="object-cover size-56 rounded-full border border-gray-100"
            />
            <button className="px-8 py-3 mt-2 rounded-full ring-2 ring-primary text-primary text-sm font-medium">
              Chose Image
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
