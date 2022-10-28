import React from 'react';
import { numberFormater } from '../../utils/numberFormater';
import ItemRow from './ItemRow';

export default function ItemList({ money, title, db_name }) {
    const moneyList = money;
    // console.log('moeny', moneyList);
    // console.log(moneyList);
    let totalexpense = 0;
    let totaldonate = 0;
    let totalinvest = 0;

    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold text-lg'>{title}</h3>
                <div className="mt-2">
                    {
                        moneyList.map((data, id) => {
                            totalexpense = totalexpense + data.Earning;
                            totaldonate = totaldonate + data.Donate;
                            totalinvest = totalinvest + data.Investment;
                            // console.log(data);

                            return <ItemRow date={data.Month} expense={data.Earning} donate={data.Donate} invest={data.Investment} key={id} ></ItemRow>;
                        })
                    }
                </div>
                <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider">
                    <p className=''><span className='border-r-2 pr-2'>Total Earning : {numberFormater(totalexpense.toFixed(2))}</span> <span className='border-r-2 pr-2 pl-2'>Total Donate : {numberFormater(totaldonate.toFixed(2))}</span> <span className='pl-2'>Total Investment : {numberFormater(totalinvest.toFixed(2))}</span></p>
                </div>
            </div>
        )
    )
}
