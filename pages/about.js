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
                <div className="xl:w-1/2 mb-8 md:mb-0">
                    <h4 className='text-lg font-semibold mb-2'>About Developer</h4>
                    <div className="md:flex gap-4">
                        <div className="max-w-[200px]">
                            <Image src={mukto} alt="Mahidul Islam Mukto"></Image>
                        </div>
                        <div className="text-slate-600">
                            <p>Mahidul Islam Mukto is a Frontend webdeveloper and WordPress Expart.Mukto is professional web developer for more than half-decade. Besides Web Development he loves to Travel, Design website UI, and gather knowledge in new technology. </p>
                            <p><a className="bg-slate-800 hover:bg-slate-500 mt-4 px-4 py-1 inline-block rounded-r-full text-white" href="https://github.com/muktoapb/" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h4 className='text-lg font-semibold my-2'>About This APP</h4>
                    <div className="text-slate-600 tracking-wide">
                        <p>The app is built for a special purpose. Money Management is very important in our life to avoid bad times. As a Muslim, I believe Allah (God) gives us everything. We don't earn anything from ourselves. Every business partner is important. Business profit or loss also depends on your business partner. In my case, I keep Allah as my business partner. I give him a 2.5% partnership. That means 2.5% of my earnings I give to charity or poor people who badly need money. If you are from another religion you can think of it as just donating. This App is designed for All of the people who want to donate a % of their income.</p>
                        <br />
                        <p>There is another part of the APP is Investment. Investment is very important for growing up. I keep 5% of my earnings for Investment. This App will automatically keep 5% money for investment and you can spend it for new business or your existing business growth.</p>
                        <p><a className="bg-slate-800 hover:bg-slate-500 mt-4 inline-block px-4 py-1 rounded-r-full text-white" href="https://github.com/muktoapb/firebase-nextjs-money-manager" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
                    </div>
                </div>

            </div>
        </>
    )
}
