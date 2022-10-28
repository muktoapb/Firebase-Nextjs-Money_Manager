import Head from 'next/head'
import React, { useState } from 'react'
import Breadcam from '../components/Breadcam'
import Chart from '../components/Chart/Chart'
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
  const option = [{ name: 'Amount', color: '#37A3E8', type: 'bar' }]
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
        <Chart data={chartdata} option={option} legend={false} />
        <MoneyList money={allIncome} title='Income Log' db_name='money' earning={true}/>
        {/* <MoneyList money={allIncome} title='Income Log' db_name='money'/> */}
      </div>
      <div onClick={() => setEPop(true)}>
        <AddButton>+</AddButton>
      </div>
    </>
  )
}
