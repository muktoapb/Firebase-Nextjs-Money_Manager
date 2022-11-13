import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import Chart from '../components/Chart/Chart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import MonthlyList from '../components/Money/MonthlyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { Nodata } from '../components/utility/Nodata';
import { dataFormater } from '../utils/dataFormater';

const Expense = ({allgetting}) => {
    const [ePop, setEPop] = useState(false);
    const allexpense = allgetting.expense;
    const chartdata = dataFormater(allexpense);
    const option = [{ name: 'Amount', color: '#F8AC41', type: 'bar' }]
    return (
        <>

            <Head>
                <title>Expense - Money Manager</title>
            </Head>


            <Breadcam title='Expense' />
            {chartdata.length==0 && <Nodata/>}
            <Popup status={ePop} setStatus={setEPop} title="Add Expense">
                <AddDonate setStatus={setEPop} title="Expense" dbName='expense' />
            </Popup>
            <div className="grid gap-5">
                <Chart data={chartdata} option={option} legend={false} labeltop={true} xname ={'Month'}/>
                <MonthlyList money={chartdata} title='Monthly Log'/>
                <MoneyList money={allexpense} title='Expense Log' db_name='expense' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Expense;