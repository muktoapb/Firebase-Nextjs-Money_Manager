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
import { yearDataFormater } from '../utils/yearDataFrormater';

const Donate = ({allgetting}) => {
    const [ePop, setEPop] = useState(false);
    const alldonate = allgetting.donate
    const chartdata = dataFormater(alldonate);
    const yeardata = yearDataFormater(alldonate);
    console.log(chartdata);
    console.log(yeardata);
    const option = [{ name: 'Amount', color: '#E9500E', type: 'bar' }]
    const optionYear = [{ name: 'Amount', color: '#e76e3a', type: 'bar' }]
    return (
        <>

            <Head>
                <title>Donate - Money Manager</title>
            </Head>


            <Breadcam title='Donate' />
            {chartdata.length==0 && <Nodata/>}
            <Popup status={ePop} setStatus={setEPop} title="Add Donation">
                <AddDonate setStatus={setEPop} title="Donation" dbName='donate' />
            </Popup>
            <div className="grid gap-4">
                <Chart data={chartdata} option={option} legend={false} labeltop={true} xname ={'Month'}/>
                <Chart data={yeardata} option={optionYear} legend={false} labeltop={true} xname ={'Year'}/>
                <MonthlyList money={chartdata} title='Monthly Log'/>
                <MoneyList money={alldonate} title='Donate Log' db_name='donate' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Donate;