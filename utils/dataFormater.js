import moment from "moment";

export const dataFormater = (source) => {

    //earning data start
    let formaingData = source.map((m) => {
        const month = moment(m?.date).format('MMMM YYYY');
        const amount = m.amount;
        const data = { mth: month, amt: amount };
        return data;
    })
    // console.log(edata);
    const monthearn = formaingData.reduce((acc, cur) => {
        acc[cur.mth] = acc[cur.mth] + cur.amt || cur.amt;
        return acc;
    }, {});

    const arraymonth = Object.keys(monthearn);
    const chartdata = arraymonth.map((key) => {
        const data = { Month: key, Amount: monthearn[key] }
        return data;
    })
    // console.log(chartdata);
    //earning data end 
    return chartdata;
}
