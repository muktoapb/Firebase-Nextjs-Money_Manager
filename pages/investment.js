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

const Investment = ({allgetting}) => {
    const [ePop, setEPop] = useState(false);
    const allinvestment = allgetting.investment;
    const chartdata = dataFormater(allinvestment);
    const option = [{ name: 'Amount', color: '#37a5e9', type: 'bar' }]
    const yeardata = yearDataFormater(allinvestment);
    const optionYear = [{ name: 'Amount', color: '#afdbf6', type: 'bar' }]
    return (
        <>

            <Head>
                <title>Investment - Money Manager</title>
            </Head>


            <Breadcam title='Investment' />
            {chartdata.length==0 && <Nodata/>}
            <Popup status={ePop} setStatus={setEPop} title="Add Investment">
                <AddDonate setStatus={setEPop} title="Investment" dbName='investment' />
            </Popup>
            <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2"><Chart data={chartdata} option={option} legend={false} labeltop={true} xname ={'Month'}/></div>
                <MonthlyList money={chartdata} title='Monthly Log'/>
                <Chart data={yeardata} option={optionYear} legend={false} labeltop={true} xname ={'Year'}/>
                <div className="md:col-span-2">
                    <MoneyList money={allinvestment} title='Investment Log' db_name='investment' />
                </div>
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Investment;