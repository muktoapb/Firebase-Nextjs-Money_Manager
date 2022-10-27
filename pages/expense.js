import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';

const Expense = ({ allexpense, earningdata }) => {
    const [ePop, setEPop] = useState(false);
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
                {/* <EarningChart earningdata={earningdata}/> */}
                <MoneyList money={allexpense} title='Income Log' db_name='money' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Expense;