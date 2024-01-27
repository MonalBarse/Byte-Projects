import { useState, useId } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
/* 
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
*/
function App() {
  const [amount, setAmount] = useState('');    // amount entered in the input box
  const [convertedAmount, setConvertedAmount] = useState(''); // converted amount
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo(from);  // custom hook - We pass the currency name and get the currency info (here we are passing the currency `from` - 'usd')
  const options = Object.keys(currencyInfo);   // get the currency names from the currencyInfo object
  const onSwap = () => {                       // swap the currency names and amount
    setFrom(to);
    setTo(from);
    setConvertedAmount("");
    setAmount(amount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#ffd4b9",
          }}
          className="text-4xl text-center mb-4"
        >
          Currency Converter
        </h1>
        <div
          style={{ backgroundColor: "#CC00000", border: "1px solid #ff9dd6" }}
          className="w-full max-w-md mx-auto  rounded-lg p-5 backdrop-blur-sm"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // what is does is - it takes the currency name and sets it to the `from` state
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} // what is does is - it takes the amount and sets it to the `amount` state
              />
            </div>
            <div className="relative w-full h-0.5">
              <button 
                style={{ backgroundColor: "#290f23", color: "#ffcbb9" }}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-purple-400 rounded-md px-2 py-0.5"
                onClick={onSwap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}

              />
            </div>
            <button
              style={{ backgroundColor: "#290f23", color: "#ffcbb9" }}
              type="submit"
              className="w-full  text-white px-4 py-3 rounded-lg "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
