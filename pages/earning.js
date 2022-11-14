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
  let yallexpense = allIncome.map((m) => {
    const year = moment(m?.date).format('YYYY');
    const amount = m.expense;
    const data = { yer: year, amt: amount };
    return data;
  })
  const monthlyTotal = (data) => {
    const monthAmt = data.reduce((acc, cur) => {
      acc[cur.mth] = acc[cur.mth] + cur.amt || cur.amt;
      return acc;
    }, {});
    return monthAmt;
  }
  const yearlyTotal = (data) => {
    const yearlyAmt = data.reduce((acc, cur) => {
      acc[cur.yer] = acc[cur.yer] + cur.amt || cur.amt;
      return acc;
    }, {});
    return yearlyAmt;
  }
  const monthlycome = monthlyTotal(allexpense);
  const yearlycome = yearlyTotal(yallexpense);
  const arraymonth = Object.keys(monthlycome);
  const arrayyear = Object.keys(yearlycome);

  const chartdata = arraymonth.map((key) => {
    const data = { Month: key, Amount: monthlycome[key] }
    return data;
  });
  const yearchartdata = arrayyear.map((key) => {
    const data = { Year: key, Amount: yearlycome[key] }
    return data;
  });
  
  const option = [{ name: 'Amount', color: '#60c0c2', type: 'bar' }]
  const optionYear = [{ name: 'Amount', color: '#a0d9da', type: 'bar' }]
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
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <Chart data={chartdata} option={option} legend={false} labeltop={true} xname ={'Month'}/>
        </div>

        <MonthlyList money={chartdata} title='Monthly Log'/>

        <Chart data={yearchartdata} option={optionYear} legend={false} labeltop={true} xname ={'Year'}/>

        <div className="md:col-span-2">
          <MoneyList money={allIncome} title='Earning Log' db_name='money' earning={true}/>
        </div>
      </div>
      <div onClick={() => setEPop(true)}>
        <AddButton>+</AddButton>
      </div>
    </>
  )
}
