import Head from 'next/head';
import Breadcam from '../components/Breadcam';
import Example from '../components/Chart/Chart';
import { GetData } from '../utils/getData';



export default function Home() {
  const mydata = GetData()
  console.log(mydata);
  return (
    <div>
      <Head>
        <title>Money Manager</title>
        <meta name="description" content="Money Manager - Track Income, Donate, Investment and Expense" />
      </Head>

      <Breadcam title='Dashboard'/>
      <Example/>
    </div>
  )
}
