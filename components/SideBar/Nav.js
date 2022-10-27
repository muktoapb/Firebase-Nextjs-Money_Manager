import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiDonateHeart } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdInfoOutline, MdOutlineAccountBalanceWallet, MdOutlineDashboard, MdPayment } from "react-icons/md";
export default function Nav() {
  const router = useRouter();
  return (
    <nav className='w-full'>
      <ul className='text-lg text-slate-600 font-medium'>

        <li className={router.pathname=='/' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/'> 
           <a className='navitem_defult'><MdOutlineDashboard className='mr-1'/> Dashboard</a>
          </Link>
        </li>

        <li className={router.pathname=='/earning' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/earning'><a className="navitem_defult"><MdOutlineAccountBalanceWallet className='mr-1'/> Earning</a></Link>
        </li>

        <li className={router.pathname=='/donate' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/donate'><a className="navitem_defult"><BiDonateHeart className='mr-1'/> Donate</a></Link>
        </li>
        
        <li className={router.pathname=='/investment' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/investment'><a className="navitem_defult"><IoBriefcaseOutline className='mr-1'/> Investment</a></Link>
        </li>
        
        <li className={router.pathname=='/expense' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/expense'><a className="navitem_defult"><MdPayment className='mr-1'/> Expense</a></Link>
        </li>

        <li className={router.pathname=='/about' ? 'navitem_design': 'hover:navitem_design'}>
          <Link href='/about'><a className="navitem_defult"><MdInfoOutline className='mr-1'/> About</a></Link>
        </li>
      </ul>
    </nav>
  )
}
