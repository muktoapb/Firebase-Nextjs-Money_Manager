import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import Chart from '../components/Chart/Chart';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';
import { dataFormater } from '../utils/dataFormater';

const Donate = ({allgetting}) => {
    const [ePop, setEPop] = useState(false);
    const alldonate = allgetting.donate
    const chartdata = dataFormater(alldonate);
    const option = [{ name: 'Amount', color: '#E9500E', type: 'bar' }]
    return (
        <>

            <Head>
                <title>Donate - Money Manager</title>
            </Head>


            <Breadcam title='Donate' />
            <Popup status={ePop} setStatus={setEPop} title="Add Donation">
                <AddDonate setStatus={setEPop} title="Donation" dbName='donate' />
            </Popup>
            <div className="grid gap-4">
                <Chart data={chartdata} option={option} legend={false} />
                <MoneyList money={alldonate} title='Income Log' db_name='donate' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Donate;