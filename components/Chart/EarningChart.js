import React from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { numberFormater } from '../../utils/numberFormater';

export default function EarningChart({ data }) {


  return (
    <div className='border-dashed border-2 py-4 px-4 rounded-lg h-[400px]'>

      <ResponsiveContainer width="99%">
        <ComposedChart
          data={data}
          width={500}
          height={400}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="Month" allowDataOverflow='true' tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => numberFormater(value)} />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Amount" barSize={20} fill="#0EA5E8">
            <LabelList dataKey="Amount" position="top" formatter={(value) => new Intl.NumberFormat('en').format(value)} className="text-[12px]" />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
