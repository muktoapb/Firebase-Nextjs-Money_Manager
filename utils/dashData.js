import moment from "moment";
import { GetData } from "./getData";

export const DashData = () => {
    const source = GetData().main;


    let allexpense = source.map((m) => {
        const month = moment(m?.date).format('MMMM YYYY');
        const amount = m.expense;
        const data = { mth: month, amt: amount };
        return data;
    })
    let alldonate = source.map((m) => {
        const month = moment(m?.date).format('MMMM YYYY');
        const amount = m.donate;
        const data = { mth: month, amt: amount };
        return data;
    })
    let allinvest = source.map((m) => {
        const month = moment(m?.date).format('MMMM YYYY');
        const amount = m.donate;
        const data = { mth: month, amt: amount };
        return data;
    })

    const monthlyTotal = (data) => {
        const monthAmt = data.reduce((acc, cur) => {
            acc[cur.mth] = acc[cur.mth] + cur.amt || cur.amt;
            return acc;
        }, {});
        return monthAmt;
    }
    const monthlyexpense = monthlyTotal(allexpense);
    const monthlydonate = monthlyTotal(alldonate);
    const monthlyinvest = monthlyTotal(allinvest);


    const arraymonth = Object.keys(monthlyexpense);
    const chartdata = arraymonth.map((key) => {
        const data = { Month: key, Amount: monthlyexpense[key], Donate: monthlydonate[key], Investment: monthlyinvest[key] }
        // formatedData.push(data);
        return data;
    });
    // return source;
    console.log(chartdata);
}
