import moment from 'moment';
import Head from 'next/head';
import Breadcam from '../components/Breadcam';
import Chart from '../components/Chart/Chart';
import ItemList from '../components/Dashboard/ItemList';
import { Nodata } from '../components/utility/Nodata';



export default function Home({ allgetting }) {
  const source = allgetting.main;
  // console.log(source);
  let allcome = source.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m.amount;
    const data = { mth: month, amt: amount };
    return data;
  })
  let allexpense = source.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m.expense;
    const data = { mth: month, amt: amount };
    return data;
  })
  let alldonate = source.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m.donate;
    const data = { mth: month, amt: amount };
    return data;
  })
  let allinvest = source.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m.invest;
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
  const monthlycome = monthlyTotal(allcome);
  const monthlyexpense = monthlyTotal(allexpense);
  const monthlydonate = monthlyTotal(alldonate);
  const monthlyinvest = monthlyTotal(allinvest);


  const arraymonth = Object.keys(monthlyexpense);
  const chartdata = arraymonth.map((key) => {
    const data = { Month: key, Amount: monthlycome[key], Earning: monthlyexpense[key], Earning: monthlyexpense[key], Donate: monthlydonate[key], Investment: monthlyinvest[key] }
    return data;
  });
  // console.log(chartdata);
  const option = [{ name: 'Donate', color: '#EA500D', type: 'bar' }, { name: 'Investment', color: '#9980FF', type: 'bar' }]

  const earnigchart = [{ name: 'Amount', color: '#37A4E8', type: 'bar' }, { name: 'Earning', color: '#E81A1E', type: 'line' }]

  return (
    <div>
      <Head>
        <title>Money Manager</title>
        <meta name="description" content="Money Manager - Track Income, Donate, Investment and Expense" />
      </Head>

      <Breadcam title='Dashboard' />
      {chartdata.length==0 && <Nodata/>}
      <div className="lg:flex lg:gap-4">
        <div className="mb-4 lg:w-1/2"><Chart data={chartdata} option={earnigchart} legend={true} labeltop={true} xname ={'Month'}/></div>
        <div className="mb-4 lg:w-1/2"><Chart data={chartdata} option={option} legend={true} xname ={'Month'}/></div>
      </div>
      <ItemList money={chartdata} title="All Gettings" db_name="money" />
    </div>
  )
}
