import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
            .then((ewa) => ewa.json())
            .then((res) => setData(res[currency])) // We use the [currency] instead of the .data because the data is an object and we want to get the value of the object
            .catch(err => console.log(err))
    }, [currency])

    return data;                   // We return the data and not also setData because we don't want to change the data, we just want to get it
}

export default useCurrencyInfo;    // We export the data because we want to use it in the CurrencyInfo.js file

/* 
This useCurrencyInfo hook is a custom hook.
We use custom hooks when we want to use the same logic in different components.
Here we are using a logic to fetch the data from the API and returning the data. (which is an object)
*/