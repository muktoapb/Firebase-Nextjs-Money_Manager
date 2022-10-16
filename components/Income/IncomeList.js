import React from 'react';
import MoneyItem from './MoneyItem';

export default function IncomeList(allIncome) {
    const incomelist = allIncome&&allIncome.allIncome;
    let totalIncome = 0;
    console.log('income',incomelist);
  return (
    <div className='moneylist'>
        <h3>Income</h3>
        <div className="moneylistwrap">
        {
                incomelist.map((data)=>{
                    totalIncome = totalIncome + data.income;
                    return <MoneyItem date={data.date} amount={data.income} text={data.comment} key={data.id}></MoneyItem>;
                })
            }
        </div>
        <div className="total">
            <p>Total Income: {totalIncome} tk</p>
        </div>

       
    </div>
  )
}
