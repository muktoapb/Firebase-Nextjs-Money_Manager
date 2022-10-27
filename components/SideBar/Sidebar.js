import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdLogout } from "react-icons/md";
import { auth } from '../../utils/firebase';
import Nav from './Nav';


export default function Sidebar() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='bg-white rounded-2xl px-8 pr-0 py-8 flex flex-col hfit items-center  ml-8 -mt-[60px] relative z-10 shadow-md relative'>
            <div className="text-center w-full pr-8 mb-12">
                <Image className='rounded-full cursor-pointer' height={60} width={60} alt={user?.displayName} src={user?.photoURL} />
                <p className='text-slate-500 text-sm mt-3'>Welcome back,</p>
                <p className='font-semibold text-lg leading-tight mt-1'>{user?.displayName}</p>
            </div>

            <Nav></Nav>
            <div className="pr-8 w-full mt-4 absolute bottom-10 left-0">
                <button className='w-full flex justify-center items-center font-semibold' onClick={() => auth.signOut()}><MdLogout/> <span className='ml-2'>Sign Out</span></button>
            </div>
        </div>
    )
}
