import Head from 'next/head'
import React, { useState } from 'react'
import Breadcam from '../components/Breadcam'
import BasicBarChart from '../components/Chart/BasicBarChart'
import AddEarning from '../components/Money/AddEarning'
import MoneyList from '../components/Money/MoneyList'
import Popup from '../components/Money/Popup'
import AddButton from '../components/utility/AddButton'
import { dataFormater } from '../utils/dataFormater'

export default function Income({allgetting}) {
  const [ePop, setEPop] = useState(false);
  // console.log(ePop);
  const allIncome = allgetting.main
  const chartdata = dataFormater(allIncome);
  return (
    <>
      <Head>
        <title>Earnings - Money Manager</title>
      </Head>
      
      
      <Breadcam title='Earnings' />
      <Popup status={ePop} setStatus={setEPop} title="Add Earning">
        <AddEarning setStatus={setEPop}/>
      </Popup>
      <div className="grid gap-5">
        <BasicBarChart data={chartdata}/>
        <MoneyList money={allIncome} title='Income Log' db_name='money' earning={true}/>
        {/* <MoneyList money={allIncome} title='Income Log' db_name='money'/> */}
      </div>
      <div onClick={() => setEPop(true)}>
        <AddButton>+</AddButton>
      </div>
    </>
  )
}
