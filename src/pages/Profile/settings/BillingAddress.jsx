const BillingAddress = () => {
  return (
    <section className='rounded-lg mb-6 md:border border-gray-100'>
      <h3 className='p-4 md:border-b border-gray-100 text-lg font-medium'>Billing Address</h3>
      <div className='p-5 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-3'>
        <div className=' md:col-span-2'>
          <label className='text-sm'>First Name</label>
          <input
            type='text'
            defaultValue={"Dianne"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className='md:col-span-2'>
          <label className='text-sm'>Last Name</label>
          <input
            type='text'
            defaultValue={"Russell"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className='col-span-2'>
          <label className='text-sm'>
            Company Name <span className='text-xs text-gray-500 '>(optional)</span>
          </label>
          <input
            type='text'
            defaultValue={"Zakirsoft"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className='col-span-full md:col-span-6'>
          <label className='text-sm'>Street Address</label>
          <input
            type='text'
            defaultValue={"4140 Parl"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className=' md:col-span-2'>
          <label className='text-sm'>Country / Region</label>
          <select
            defaultValue={"us"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'>
            <option value='us' selected>
              United States
            </option>
            <option value='uk'>United Kingdom</option>
            <option value='europe'>Europe</option>
          </select>
        </div>
        <div className='md:col-span-2'>
          <label className='text-sm'>States</label>
          <select
            defaultValue={"us"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'>
            <option value='washington-dc' selected>
              Washington DC
            </option>
            <option value='alabama' selected>
              Alabama
            </option>
            <option value='alaska' selected>
              Alaska
            </option>
          </select>
        </div>
        <div className='col-span-2'>
          <label className='text-sm'>Zip Code</label>
          <input
            type='text'
            defaultValue={"20033"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className='col-span-full md:col-span-3'>
          <label className='text-sm'>Email</label>
          <input
            type='text'
            defaultValue={"dianne.russell@gmail.com"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className='col-span-full md:col-span-3'>
          <label className='text-sm'>Phone</label>
          <input
            type='text'
            defaultValue={"(603) 555-0123"}
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>

        <div className='col-span-full md:col-span-6'>
          <button className='px-7 mt-2 py-2.5 text-sm rounded-full bg-primary hover:bg-primary/80 text-white'>Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
