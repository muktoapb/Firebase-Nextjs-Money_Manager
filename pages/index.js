import Head from 'next/head';
import Breadcam from '../components/Breadcam';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Money Manager</title>
        <meta name="description" content="Money Manager - Track Income, Donate, Investment and Expense" />
      </Head>

      <Breadcam title='Dashboard'/>
    </div>
  )
}
