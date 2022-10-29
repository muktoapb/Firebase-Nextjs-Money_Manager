
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoLogoGithub } from 'react-icons/io5';
import { MdLogout } from "react-icons/md";
import Bgimg from '../assets/img/art.jpg';
import { auth } from '../utils/firebase';
export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="absolute top-0 left-0 w-full">

      <div className="relative h-16 md:h-24">
        <Image alt="banner" src={Bgimg} className="object-cover w-full object-center" layout='fill'></Image>
      </div>
      <div className="absolute flex justify-between md:justify-end items-center top-0 bottom-0 left-0 right-0 my-auto px-4">
        <div className="border-white border-4 border-solid rounded-full w-[60px] h-[60px] md:hidden block">
          <Image className='rounded-full cursor-pointer ' height={60} width={60} alt={user?.displayName} src={user?.photoURL} />
        </div>
        <div className="flex">
          <div className="bg-slate-50 px-4 border-2 border-red-500">
            <button className='w-full flex justify-center items-center font-semibold' onClick={() => auth.signOut()}><MdLogout /> <span className='ml-2'>Sign Out</span></button>
          </div>
          <div className="ml-2 text-[30px] md:mr-4">
            <a href="https://github.com/muktoapb/firebase-nextjs-money-manager" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
