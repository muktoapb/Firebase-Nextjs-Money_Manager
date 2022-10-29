import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiDonateHeart } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdInfoOutline, MdOutlineAccountBalanceWallet, MdOutlineDashboard, MdPayment } from "react-icons/md";
export default function Nav() {
  const router = useRouter();
  return (
    <nav className='w-full'>
      <ul className='text-lg text-slate-600 font-medium md:block flex w-full justify-between'>

        <li className={router.pathname=='/' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/'> 
           <a className='navitem_defult'><MdOutlineDashboard className='md:mr-1'/> <span className="hidden md:block">Dashboard</span></a>
          </Link>
        </li>

        <li className={router.pathname=='/earning' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/earning'><a className="navitem_defult"><MdOutlineAccountBalanceWallet className='md:mr-1'/><span className="hidden md:block">Earning</span> </a></Link>
        </li>

        <li className={router.pathname=='/donate' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/donate'><a className="navitem_defult"><BiDonateHeart className='md:mr-1'/><span className="hidden md:block">Donate</span> </a></Link>
        </li>
        
        <li className={router.pathname=='/investment' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/investment'><a className="navitem_defult"><IoBriefcaseOutline className='md:mr-1'/><span className="hidden md:block">Investment</span> </a></Link>
        </li>
        
        <li className={router.pathname=='/expense' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/expense'><a className="navitem_defult"><MdPayment className='md:mr-1'/><span className="hidden md:block">Expense</span> </a></Link>
        </li>

        <li className={router.pathname=='/about' ? 'navitem_design border-2 md:border-none border-sky-500': 'hover:navitem_design border-2 md:border-none border-transparent hover:border-sky-500'}>
          <Link href='/about'><a className="navitem_defult"><MdInfoOutline className='md:mr-1'/><span className="hidden md:block">About</span> </a></Link>
        </li>
      </ul>
    </nav>
  )
}
