import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import Nav from './Nav';


export default function Sidebar() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='bg-white rounded-2xl px-4 md:px-8 md:pr-0 pt-0 md:pt-8 py-0 md:py-8 flex md:flex-col md:h-full md:min-h-full items-center md:ml-8  relative z-10 shadow-md mx-4 md:mx-0'>
            <div className="text-center w-[60px] md:w-full pr-8 md:mb-12 hidden md:block">
                <Image className='rounded-full cursor-pointer' height={60} width={60} alt={user?.displayName} src={user?.photoURL} />
                <p className='text-slate-500 text-sm mt-3'>Welcome back,</p>
                <p className='font-semibold text-lg leading-tight mt-1'>{user?.displayName}</p>
            </div>

            <Nav></Nav>
        </div>
    )
}
