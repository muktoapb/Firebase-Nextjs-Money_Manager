import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import Chart from '../components/Chart/Chart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { dataFormater } from '../utils/dataFormater';

const Investment = ({allgetting}) => {
    const [ePop, setEPop] = useState(false);
    const allinvestment = allgetting.investment;
    const chartdata = dataFormater(allinvestment);
    const option = [{ name: 'Amount', color: '#E7191B', type: 'bar' }]
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
                <Chart data={chartdata} option={option} legend={false} />
                <MoneyList money={allinvestment} title='Income Log' db_name='investment' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Investment;