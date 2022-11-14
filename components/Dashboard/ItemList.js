import React, { useMemo, useState } from 'react';
import { numberFormater } from '../../utils/numberFormater';
import Pagination from '../Money/Pagination';
import ItemRow from './ItemRow';
let PageSize = 6;
export default function ItemList({ money, title }) {
    const moneyList = money;

    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return moneyList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, moneyList]);

    let totalexpense = moneyList.reduce(function (prev, cur) {
        return prev + cur.Earning;
    }, 0);
    let totaldonate = moneyList.reduce(function (prev, cur) {
        return prev + cur.Donate;
    }, 0);
    let totalinvest = moneyList.reduce(function (prev, cur) {
        return prev + cur.Investment;
    }, 0);
    

    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold'>{title}</h3>
                <div className="mt-2">
                    {
                        currentTableData.map((data, id) => <ItemRow date={data.Month} expense={data.Earning} donate={data.Donate} invest={data.Investment} key={id} ></ItemRow>)
                    }
                </div>
                <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider md:flex justify-between items-center">
                <Pagination
                        currentPage={currentPage}
                        totalCount={moneyList.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                    <p className='mt-2 md:mt-0'><span className='md:border-r-2 pr-2 block md:inline-block'>Total Earning : {numberFormater(totalexpense.toFixed(2))}</span> <span className='md:border-r-2 md:pr-2 md:pl-2 block md:inline-block'>Total Donate : {numberFormater(totaldonate.toFixed(2))}</span> <span className='md:pl-2 block md:inline-block'>Total Investment : {numberFormater(totalinvest.toFixed(2))}</span></p>
                </div>
            </div>
        )
    )
}
