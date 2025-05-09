import { useEffect, useState } from "react";

function useCurrency(){
    const [data, setData] = useState({});
    const apiKey = "cur_live_seDJ81nkni9RFKO7ZYQt5aDhR9TxowWiyLsWfDa9";

    useEffect(() =>{
        const fetchCurrencyInfo = async ()=>{
            const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`);
            const currencyData = await response.json();
            setData(currencyData["data"]);
        }

        fetchCurrencyInfo();
    }, []);

    return data;
}

export default useCurrency;