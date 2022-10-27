import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import EarningChart from '../components/Chart/EarningChart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { dataFormater } from '../utils/dataFormater';

const Investment = ({ allinvestment }) => {
    const [ePop, setEPop] = useState(false);
    const chartdata = dataFormater(allinvestment);
    return (
        <>

            <Head>
                <title>Investment - Money Manager</title>
            </Head>


            <Breadcam title='Investment' />
            <Popup status={ePop} setStatus={setEPop} title="Add Investment">
                <AddDonate setStatus={setEPop} title="Investment" dbName='investment' />
            </Popup>
            <div className="grid gap-5">
                <EarningChart data={chartdata}/>
                <MoneyList money={allinvestment} title='Income Log' db_name='investment' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Investment;