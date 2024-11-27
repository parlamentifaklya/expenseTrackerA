import React, { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "../UseContext/UseContext"

const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext)
  const [tranaction, setTransactions] = useState('')
  const [tranactionValue, setTransactionValue] = useState(0)

  const TransactionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTransactions(e.target.value)
  }

  const ValueChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTransactionValue(parseInt(e.target.value))
  }

  const HandleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text: tranaction,
      amount: tranactionValue
    }
    addTransaction(newTransaction)
  }

  return (
    <form className="addTr" onSubmit={HandleSubmit}>
        <h2>Add Transaction</h2>
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text" value={tranaction} onChange={TransactionChange}/>
        <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
        <input type="number" value={tranactionValue} onChange={ValueChange}/>
        <button className="addBtn">Add Transaction</button>
    </form>
  )
}

export default AddTransaction