import moment from 'moment'
import Head from 'next/head'
import React, { useState } from 'react'
import Breadcam from '../components/Breadcam'
import Chart from '../components/Chart/Chart'
import AddEarning from '../components/Money/AddEarning'
import MoneyList from '../components/Money/MoneyList'
import MonthlyList from '../components/Money/MonthlyList'
import Popup from '../components/Money/Popup'
import AddButton from '../components/utility/AddButton'
import { Nodata } from '../components/utility/Nodata'

export default function Income({allgetting}) {
  const [ePop, setEPop] = useState(false);
  // console.log(ePop);
  const allIncome = allgetting.main
  let allexpense = allIncome.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m.expense;
    const data = { mth: month, amt: amount };
    return data;
  })
  const monthlyTotal = (data) => {
    const monthAmt = data.reduce((acc, cur) => {
      acc[cur.mth] = acc[cur.mth] + cur.amt || cur.amt;
      return acc;
    }, {});
    return monthAmt;
  }
  const monthlycome = monthlyTotal(allexpense);
  const arraymonth = Object.keys(monthlycome);
  const chartdata = arraymonth.map((key) => {
    const data = { Month: key, Amount: monthlycome[key] }
    return data;
  });
  // console.log(chartdata);
  const option = [{ name: 'Amount', color: '#37A3E8', type: 'bar' }]
  return (
    <>
      <Head>
        <title>Earnings - Money Manager</title>
      </Head>
      
      
      <Breadcam title='Earnings' />
      {chartdata.length==0 && <Nodata/>}
      <Popup status={ePop} setStatus={setEPop} title="Add Earning">
        <AddEarning setStatus={setEPop}/>
      </Popup>
      <div className="grid gap-5">
        <Chart data={chartdata} option={option} legend={false} labeltop={true} xname ={'Month'}/>
        <MonthlyList money={chartdata} title='Monthly Log'/>
        <MoneyList money={allIncome} title='Earning Log' db_name='money' earning={true}/>
      </div>
      <div onClick={() => setEPop(true)}>
        <AddButton>+</AddButton>
      </div>
    </>
  )
}
