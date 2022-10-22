import Head from 'next/head'
import React, { useState } from 'react'
import Breadcam from '../components/Breadcam'
import EarningChart from '../components/Chart/EarningChart'
import AddEarning from '../components/Money/AddEarning'
import MoneyList from '../components/Money/MoneyList'
import Popup from '../components/Money/Popup'
import AddButton from '../components/utility/AddButton'

export default function Income({ allIncome }) {
  const [ePop, setEPop] = useState(false);
  // console.log(ePop);



  return (
    <>
      <Head>
        <title>Earnings - Money Manager</title>
      </Head>
      
      
      <Breadcam title='Earnings' />
      <Popup status={ePop} setStatus={setEPop} title="Add Earning">
        <AddEarning setStatus={setEPop}/>
      </Popup>
      <div className="grid xl:grid-cols-2 gap-5">
        <MoneyList money={allIncome} title='Income Log' db_name='money'/>
        <EarningChart money={allIncome}/>
        <MoneyList money={allIncome} title='Income Log' db_name='money'/>
      </div>
      <div onClick={() => setEPop(true)}>
        <AddButton>+</AddButton>
      </div>
    </>
  )
}
