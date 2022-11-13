import { numberFormater } from "../../utils/numberFormater";
import MonthlyRow from "./MonthlyRow";

export default function MonthlyList({ money, title }) {
    const moneyList = money;
    // console.log('moeny', moneyList);
    // console.log(moneyList);
    let totalAmount = 0;

    return (
        moneyList.length > 0 && (
            <div className='border-dashed border-2 py-3 px-3 rounded-lg'>
                <h3 className='font-semibold'>{title}</h3>
                <div className="mt-2">
                    {
                        moneyList.map((data, id) => {
                            totalAmount = totalAmount + data.Amount;
                            // console.log(data);

                            return <MonthlyRow date={data.Month} expense={data.Amount}  key={id} ></MonthlyRow>;
                        })
                    }
                </div>
                <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider">
                    <p><span className='block md:inline-block'>Total : {numberFormater(totalAmount.toFixed(2))}</span> </p>
                </div>
            </div>
        )
    )
}
