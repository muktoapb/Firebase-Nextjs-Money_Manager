import moment from "moment";

export const yearDataFormater = (source) => {

    //earning data start
    let formaingData = source.map((m) => {
        const year = moment(m?.date).format('YYYY');
        const amount = m.amount;
        const data = { yer: year, amt: amount };
        return data;
    })
    // console.log(edata);
    const yearearn = formaingData.reduce((acc, cur) => {
        acc[cur.yer] = acc[cur.yer] + cur.amt || cur.amt;
        return acc;
    }, {});

    const arrayyear = Object.keys(yearearn);
    const chartdata = arrayyear.map((key) => {
        const data = { Year: key, Amount: yearearn[key] }
        return data;
    })
    return chartdata;
}
