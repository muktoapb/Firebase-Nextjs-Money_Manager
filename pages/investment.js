import Head from 'next/head';
import React, { useState } from 'react';
import Breadcam from '../components/Breadcam';
import AddDonate from '../components/Money/AddData';
import MoneyList from '../components/Money/MoneyList';
import Popup from '../components/Money/Popup';
import AddButton from '../components/utility/AddButton';

const Investment = ({ allinvestment, earningdata }) => {
    const [ePop, setEPop] = useState(false);
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
                {/* <EarningChart earningdata={earningdata}/> */}
                <MoneyList money={allinvestment} title='Income Log' db_name='money' />
            </div>
            <div onClick={() => setEPop(true)}>
                <AddButton>+</AddButton>
            </div>
        </>
    );
};

export default Investment;