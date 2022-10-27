import React from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function EarningChart({ earningdata }) {


  return (
    <div className='bg-white py-4 px-4 rounded-lg h-[400px]'>

      <ResponsiveContainer width="99%">
        <ComposedChart
          data={earningdata}
          width={500}
          height={400}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="Month" allowDataOverflow='true' tick={{fontSize: 10}} />
          <YAxis tick={{fontSize: 10}} />
          <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Amount" barSize={20} fill="#0EA5E8">
            <LabelList dataKey="Amount" position="top" formatter={(value) => new Intl.NumberFormat('en').format(value)} className="text-[10px]"/>
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
