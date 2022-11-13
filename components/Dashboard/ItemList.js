import React from 'react';
import { numberFormater } from '../../utils/numberFormater';
import ItemRow from './ItemRow';

export default function ItemList({ money, title }) {
    const moneyList = money;
    let totalexpense = 0;
    let totaldonate = 0;
    let totalinvest = 0;

    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold'>{title}</h3>
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
                    <p className=''><span className='md:border-r-2 pr-2 block md:inline-block'>Total Earning : {numberFormater(totalexpense.toFixed(2))}</span> <span className='md:border-r-2 md:pr-2 md:pl-2 block md:inline-block'>Total Donate : {numberFormater(totaldonate.toFixed(2))}</span> <span className='md:pl-2 block md:inline-block'>Total Investment : {numberFormater(totalinvest.toFixed(2))}</span></p>
                </div>
            </div>
        )
    )
}
