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

        <li className={`navitem_defult ${router.pathname=='/' ? 'text-blue-700 bg-slate-50 px-2 py-1 shadow-inner rounded-md rounded-r-none after:w-2 after:h-full after:absolute after:right-[-4px] after:top-0 after:bg-slate-50': 'hover:navitem_design'}`}>
          <MdOutlineDashboard className='mr-1'/>
          <Link href='/'> Dashboard </Link>
        </li>

        <li className={`navitem_defult ${router.pathname=='/earning' ? 'navitem_design': 'hover:navitem_design'}`}>
          <MdOutlineAccountBalanceWallet className='mr-1'/>
          <Link href='/earning'>Earning</Link>
        </li>

        <li className={`navitem_defult ${router.pathname=='/donate' ? 'navitem_design': 'hover:navitem_design'}`}>
          <BiDonateHeart className='mr-1'/>
          <Link href='/donate'>Donate</Link>
        </li>
        
        <li className={`navitem_defult ${router.pathname=='/investment' ? 'navitem_design': 'hover:navitem_design'}`}>
          <IoBriefcaseOutline className='mr-1'/>
          <Link href='/investment'>Investment</Link>
        </li>
        
        <li className={`navitem_defult ${router.pathname=='/expense' ? 'navitem_design': 'hover:navitem_design'}`}>
          <MdPayment className='mr-1'/>
          <Link href='/expense'>Expense</Link>
        </li>
      </ul>
    </nav>
  )
}
