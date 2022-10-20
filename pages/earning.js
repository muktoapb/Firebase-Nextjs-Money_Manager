import Head from 'next/head'
import React, { useState } from 'react'
import Breadcam from '../components/Breadcam'
import AddEarning from '../components/Money/AddEarning'
import IncomeList from '../components/Money/IncomeList'
import Popup from '../components/Money/Popup'

export default function Income({ allIncome }) {
  const [ePop, setEPop]= useState(true);
  return (
    <div>
      <Head>
        <title>Earnings - Money Manager</title>
      </Head>
      <Breadcam title='Earnings'/>
      <Popup status={ePop} setStatus={setEPop}>
        <AddEarning/>
      </Popup>
      <div className="income_list">
        <IncomeList allIncome={allIncome} />
      </div>
    </div >
  )
}
