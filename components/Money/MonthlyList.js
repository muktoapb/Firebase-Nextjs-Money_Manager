import { useMemo, useState } from "react";
import { numberFormater } from "../../utils/numberFormater";
import MonthlyRow from "./MonthlyRow";
import Pagination from "./Pagination";
let PageSize = 6;
export default function MonthlyList({ money, title }) {
    const moneyList = money;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return moneyList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, moneyList]);

    let totalAmount = 0;

    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold'>{title}</h3>
                <div className="mt-2">
                    {
                        currentTableData.map((data, id) => {
                            totalAmount = totalAmount + data.Amount;
                            // console.log(data);

                            return <MonthlyRow date={data.Month} expense={data.Amount}  key={id} ></MonthlyRow>;
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
                    <p><span className='mt-2 md:mt-0'>List Total : {numberFormater(totalAmount.toFixed(2))}</span> </p>
                </div>
            </div>
        )
    )
}
