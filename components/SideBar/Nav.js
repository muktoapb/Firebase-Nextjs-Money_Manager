import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiDonateHeart } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet, MdOutlineDashboard, MdPayment } from "react-icons/md";
export default function Nav() {
  const router = useRouter();
  return (
    <nav className='w-full'>
      <ul className='text-lg text-slate-600 font-medium'>

        <li className={`flex items-center my-3 ${router.pathname=='/' ? 'text-blue-700': 'hover:text-blue-700'}`}>
          <MdOutlineDashboard className='mr-1'/>
          <Link href='/'> Dashboard </Link>
        </li>

        <li className={`flex items-center my-3 ${router.pathname=='/earning' ? 'text-blue-700': 'hover:text-blue-700'}`}>
          <MdOutlineAccountBalanceWallet className='mr-1'/>
          <Link href='/earning'>Earning</Link>
        </li>

        <li className={`flex items-center my-3 ${router.pathname=='/donate' ? 'text-blue-700': 'hover:text-blue-700'}`}>
          <BiDonateHeart className='mr-1'/>
          <Link href='/donate'>Donate</Link>
        </li>
        
        <li className={`flex items-center my-3 ${router.pathname=='/investment' ? 'text-blue-700': 'hover:text-blue-700'}`}>
          <IoBriefcaseOutline className='mr-1'/>
          <Link href='/investment'>Investment</Link>
        </li>
        
        <li className={`flex items-center my-3 ${router.pathname=='/expense' ? 'text-blue-700': 'hover:text-blue-700'}`}>
          <MdPayment className='mr-1'/>
          <Link href='/expense'>Expense</Link>
        </li>
      </ul>
    </nav>
  )
}
