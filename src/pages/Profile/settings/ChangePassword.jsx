import PasswordInput from "../../../components/ui/PasswordInput";

const ChangePassword = () => {
  return (
    <section className='rounded-lg mb-6 md:border border-gray-100'>
      <h3 className='p-4 md:border-b border-gray-100 text-lg font-medium'>Change Password</h3>
      <div className='p-5 grid md:grid-cols-2 gap-x-4 gap-y-3'>
        <div className='md:col-span-2'>
          <label className='text-sm'>Current Password</label>
          <PasswordInput placeholder='Password' className='' />
        </div>
        <div className=''>
          <label className='text-sm'>New Password</label>
          <PasswordInput
            placeholder='Password'
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>
        <div className=''>
          <label className='text-sm'>Confirm Password</label>
          <PasswordInput
            placeholder='Password'
            className='w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all'
          />
        </div>

        <div className='md:first-line:col-span-2'>
          <button className='px-7 mt-2 py-2.5 text-sm rounded-full bg-primary hover:bg-primary/80 text-white'>Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
