
import Image from 'next/image';
import Bgimg from '../assets/img/2.jpg';
import { MdLogout } from "react-icons/md";
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="absolute top-0 left-0 w-full">
      
      <div className="relative h-24">
        <Image alt="banner" src={Bgimg} className="object-cover w-full object-center" layout='fill'></Image>
      </div>
      <div className="absolute flex justify-between items-center top-0 bottom-0 left-0 right-0 my-auto md:hidden px-8">
        <div className="border-white border-4 border-solid rounded-full w-[60px] h-[60px]">
          <Image className='rounded-full cursor-pointer ' height={60} width={60} alt={user?.displayName} src={user?.photoURL} />
        </div>
        <div className="bg-slate-50 px-4 border-2 border-red-500">
        <button className='w-full flex justify-center items-center font-semibold' onClick={() => auth.signOut()}><MdLogout/> <span className='ml-2'>Sign Out</span></button>
        </div>
      </div>
    </div>
  )
}
