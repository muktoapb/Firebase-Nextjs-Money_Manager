import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import BasicBarChart from '../components/Chart/BasicBarChart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { dataFormater } from '../utils/dataFormater';
import { GetData } from '../utils/getData';

const Expense = () => {
    const [ePop, setEPop] = useState(false);
    const allexpense = GetData().expense;
    const chartdata = dataFormater(allexpense);
    return (
        <>

            <Head>
                <title>Donate - Money Manager</title>
            </Head>


            <Breadcam title='Expense' />
            <Popup status={ePop} setStatus={setEPop} title="Add Expense">
                <AddDonate setStatus={setEPop} title="Expense" dbName='expense' />
            </Popup>
            <div className="grid gap-5">
                <BasicBarChart data={chartdata}/>
                <MoneyList money={allexpense} title='Income Log' db_name='expense' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Expense;