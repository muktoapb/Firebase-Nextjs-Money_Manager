import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import EarningChart from '../components/Chart/EarningChart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { dataFormater } from '../utils/dataFormater';

const Donate = ({ alldonate }) => {
    const [ePop, setEPop] = useState(false);
    const chartdata = dataFormater(alldonate);
    return (
        <>

            <Head>
                <title>Donate - Money Manager</title>
            </Head>


            <Breadcam title='Donate' />
            <Popup status={ePop} setStatus={setEPop} title="Add Donation">
                <AddDonate setStatus={setEPop} title="Donation" dbName='donate' />
            </Popup>
            <div className="grid gap-5">
                <EarningChart data={chartdata}/>
                <MoneyList money={alldonate} title='Income Log' db_name='donate' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Donate;