import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import mukto from '../assets/img/mukto.png';
import Breadcam from '../components/Breadcam';
export default function About() {
    return (
        <>
            <Head>
                <title>About APP & Developer - Money Manager</title>
            </Head>


            <Breadcam title='About' />
            <div className="xl:flex xl:gap-8">
                <div className="xl:w-1/2">
                <h4 className='text-lg font-semibold mb-2'>About Developer</h4>
                <div className="flex gap-4">
                    <div className="max-w-[200px]">
                        <Image src={mukto} alt="Mahidul Islam Mukto"></Image>
                    </div>
                    <div className="text-slate-600">
                        <p>Mahidul Islam Mukto is a Frontend webdeveloper and WordPress Expart.Mukto is professional web development for more than half-decade. Besides Web Development he love to Travel, Design website UI, and gather knowledge in new technology. </p>
                        <p><a className="bg-slate-800 hover:bg-slate-500 mt-4 px-4 py-1 inline-block rounded-r-full text-white" href="https://github.com/muktoapb/" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2">
                <h4 className='text-lg font-semibold my-2'>About This APP</h4>
                <div className="text-slate-600 tracking-wide">
                        <p>App is build for a special parpase. Money Management is very import for our life to avoid bad times. As Muslim I belive Allah (God) give us eveything. We don't earn anything from ourself. In every business partner is importent. Business profite or loss also depend on your business partner. In my case I keep Allah as my business partner. I give him 2.5% partnership. That's means 2.5% of my earning I give charity or poor people who badly need money. If you from other religion you can think it as just donate. This App is design for All of the people who want to donate a % of their income. </p>
                        <br/>
                        <p>There is another part of the APP is Investment. Investment is very importent for growing up. I keep 5% of my earning for Investment. This App will automatically keep 5% money for investment and you can spand it for new business or your existing business growing.</p>
                        <p><a className="bg-slate-800 hover:bg-slate-500 mt-4 inline-block px-4 py-1 rounded-r-full text-white" href="https://github.com/muktoapb/firebase-nextjs-money-manager" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
