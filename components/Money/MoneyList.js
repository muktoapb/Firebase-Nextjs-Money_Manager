import React, { useMemo, useState } from 'react';
import { numberFormater } from '../../utils/numberFormater';
import MoneyItem from './MoneyItem';
import Pagination from './Pagination';
let PageSize = 10;

export default function MoneyList({ money, title, db_name, earning }) {
    const moneyList = money;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return moneyList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, moneyList]);

    let totalMoney = moneyList.reduce(function (prev, cur) {
        if (earning) {
            return prev + cur.expense;
        } else {
            return prev + cur.amount;
        }
        
    }, 0);
    
    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold'>{title}</h3>
                <div className="mt-2">
                    {
                        currentTableData.map((data) => {
                            let amount = 0;
                            if (earning) {
                                amount = data.expense
                            } else {
                                amount = data.amount
                            }
                            return <MoneyItem date={data.date} amount={amount} text={data.comment} itemid={data.id} key={data.id} db_name={db_name} ></MoneyItem>;
                        })
                    }
                </div>
                
                
                <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider md:flex justify-between items-center">
                <Pagination
                        currentPage={currentPage}
                        totalCount={moneyList.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                    <p className='mt-2 md:mt-0'>Total : {numberFormater(totalMoney)}</p>
                </div>


            </div>
        )
    )
}
