import moment from 'moment/moment';
import React, { useState } from 'react';

export default function EarningChart({money}) {
    const [earningdate, setEarningData]=useState({})
    
    let edata = []
    money.map((m)=>{
       
        const month = moment(m?.date).format('YYYY-MMMM');
        const amount = m?.amount;
        console.log(month);
        edata.push({mth:month,amt:amount});
        // setEarningData(edata)
    })
    console.log(edata);
    


  return (
    <div className='bg-white py-4 px-4 rounded-lg'>
        <h3>Earning Chart</h3>
    </div>
  )
}
