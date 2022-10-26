import moment from 'moment/moment';
import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function EarningChart({ money }) {

  let edata = money.map((m) => {
    const month = moment(m?.date).format('MMMM YYYY');
    const amount = m?.amount;
    const data = { mth: month, amt: amount };
    return data;
  })

  const monthearn = edata.reduce((acc, cur) => {
    acc[cur.mth] = acc[cur.mth] + cur.amt || cur.amt;
    return acc;
  }, {});

  const arraymonth = Object.keys(monthearn);
  const chartdata = arraymonth.map((key) => {
    const data = { month: key, amount: monthearn[key] }
    return data;
  })


  return (
    <div className='bg-white py-4 px-4 rounded-lg h-[400px]'>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartdata}
          width={500}
          height={400}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="amount" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
