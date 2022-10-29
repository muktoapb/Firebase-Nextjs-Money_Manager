import React from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { numberFormater } from '../../utils/numberFormater';

export default function Chart({ data, legend, option,labeltop }) {

  // console.log(option);
  return (
    data.length>0 &&
    <div className='border-dashed border-2 py-2 px-2 pl-0 md:py-4 md:px-4 rounded-lg h-[400px]'>

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

          ${legend && <Legend />}

          <CartesianGrid strokeDasharray="3 3" />
          {
            option.map((item, index) => (
              item.type == 'bar' ? <Bar key={index} dataKey={item.name} barSize={30} fill={item.color}>
                {
                  labeltop && <LabelList dataKey={item.name} position="top" formatter={(value) => new Intl.NumberFormat('en').format(value)} className="text-[12px] hidden md:block" />
                }

              </Bar> :
                item.type == 'line' && <Line key={index} type="monotone" dataKey={item.name} stroke={item.color} />
            ))
          }
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
