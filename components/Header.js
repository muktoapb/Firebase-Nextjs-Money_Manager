
import Image from 'next/image';
import Bgimg from '../assets/img/2.jpg';
export default function Header() {
  return (
    <div className="">
      
      <div className="relative h-24">
        <Image alt="banner" src={Bgimg} className="object-cover w-full object-center" layout='fill'></Image>
      </div>
    </div>
  )
}
