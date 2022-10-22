import React from 'react';
import MoneyItem from './MoneyItem';

export default function MoneyList({ money, title, db_name }) {
    const moneyList = money;
    // console.log(moneyList);
    let totalMoney = 0;
    return (
        moneyList.length>0&&(
            <div className='bg-white py-3 px-3 rounded-lg'>
            <h3 className='font-semibold'>{title}</h3>
            {/* <div className="w-full my-2 h-[1px] bg-slate-200"></div> */}
            <div className="mt-2">
                {
                    moneyList.map((data) => {
                        totalMoney = totalMoney + data.amount;
                        return <MoneyItem date={data.date} amount={data.amount} text={data.comment} itemid={data.id} key={data.id} db_name={db_name}></MoneyItem>;
                    })
                }
            </div>
            {/* <div className="w-full my-2 h-[1px] bg-slate-200"></div> */}
            <div className="mt-3">
                <p>Total : {totalMoney}</p>
            </div>


        </div>
        )
    )
}
