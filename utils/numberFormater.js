export const numberFormater = (x) => {
    let gotnumber = parseInt(x).toFixed();
    return gotnumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
