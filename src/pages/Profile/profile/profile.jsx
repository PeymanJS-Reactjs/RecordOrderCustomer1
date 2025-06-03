import { Link } from "react-router-dom";
import RecentOrder from "./RecentOrder";

const Profile = () => {
  return (
    <div className='grid grid-cols-7 gap-5'>
      <div className='border border-gray-100 p-8 col-span-4 rounded-lg flex justify-center items-center'>
        <div className='text-center '>
          <img src='/images/eProf.jpg' alt='profile' className='rounded-full object-cover size-32 border border-gray-50' />
          <p className='text-xl mt-2'>Dianne Russell</p>
          <p className='text-gray-500 mt-1 text-sm'>Customer</p>
          <Link className='text-primary mt-2 block font-medium'>Edit Profile</Link>
        </div>
      </div>
      <div className='border border-gray-100 p-7 col-span-3 rounded-lg gap-1 flex flex-col '>
        <p className='uppercase text-gray-400 text-sm font-medium'>Billing Address</p>
        <p className='text-lg mt-4'>Dainne Russell</p>
        <p className='text-gray-600 text-sm mt-2'>4140 Parker Rd. Allentown, New Mexico 31134</p>
        <p className='mt-2'>dainne.ressell@gmail.com</p>
        <p className='mt-2'>(671) 555-0110</p>
        <Link className='text-primary mt-auto block font-medium'>Edit Address</Link>
      </div>

      <RecentOrder />
    </div>
  );
};

export default Profile;
