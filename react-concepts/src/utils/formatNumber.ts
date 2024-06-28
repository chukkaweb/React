export const formatNumber = (number:any) => {
    if(number >= 1000000) { number =  (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; };
    if(number >= 1000) { number =  (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; };
    return number

}