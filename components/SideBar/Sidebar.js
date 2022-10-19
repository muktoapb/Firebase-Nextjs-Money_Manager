import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdLogout } from "react-icons/md";
import { auth } from '../../utils/firebase';
import Nav from './Nav';


export default function Sidebar() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='bg-white rounded-md px-8 py-8 flex flex-col min-h-screen items-center justify-between'>
            <div className="text-center w-full">
                <Image className='rounded-full cursor-pointer' height={60} width={60} alt={user?.displayName} src={user?.photoURL} />
                <p className='text-slate-300 text-sm mt-3'>Welcome back,</p>
                <p className='font-bold text-lg'>{user?.displayName}</p>
            </div>

            <Nav></Nav>
            <button className='ml-2 w-full flex justify-center items-center' onClick={() => auth.signOut()}><MdLogout/> <span className='ml-2'>Sign Out</span></button>
        </div>
    )
}
