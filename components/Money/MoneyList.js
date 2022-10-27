import React from 'react';
import { numberFormater } from '../../utils/numberFormater';
import MoneyItem from './MoneyItem';

export default function MoneyList({ money, title, db_name,earning }) {
    const moneyList = money;
    // console.log(moneyList);
    let totalMoney = 0;

    return (
        moneyList.length>0&&(
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
            <h3 className='font-semibold'>{title}</h3>
            <div className="mt-2">
                {
                    moneyList.map((data) => {
                        let amount = 0;
                        // console.log(data);
                        if (earning) {
                            amount = data.expense
                        }else{
                            amount = data.amount
                        }
                        totalMoney = totalMoney + amount;

                        return <MoneyItem date={data.date} amount={amount} text={data.comment} itemid={data.id} key={data.id} db_name={db_name} ></MoneyItem>;
                    })
                }
            </div>
            <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider">
                <p>Total : {numberFormater(totalMoney)}</p>
            </div>


        </div>
        )
    )
}
