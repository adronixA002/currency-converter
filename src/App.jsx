import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { HiArrowsUpDown } from "react-icons/hi2";

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='bg-[url(https://www.zizo.co.uk/wp-content/uploads/2024/03/Zizo-Simplifying-Data-Processes-Zizo.jpg)] h-screen bg-contain bg-no-repeat flex flex-col items-center p-5'>
        <div className='w-[80%] my-5'>
          <Input
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
          />
        </div>
        <button className='bg-blue-400 px-8 py-2 rounded-2xl flex items-center' onClick={swap}>Swap<HiArrowsUpDown /></button>
        <div className='w-[80%] my-5'>
          <Input
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            selectCurrency={to}
          />
        </div>
        <button className='bg-red-500 cursor-pointer hover:bg-red-300 px-8 py-3 text-white text-2xl rounded-2xl' onClick={convert}>
          Convert {from.toUpperCase} to {to.toUpperCase}
        </button>
      </div>
    </>
  )
}

export default App
