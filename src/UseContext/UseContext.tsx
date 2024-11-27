import  { createContext, ReactNode, useState } from 'react'

type transactioType={
    id:number,
    text:string,
    amount:number,
}

type GlobalState = {
    transactions:transactioType[];
    deleteTransaction:(id:number)=>void;
    addTransaction:(t:transactioType)=>void;
}

const initialState = {
    transactions:[
        {id:1, text:'Flowers',amount:-30},
        {id:2, text:'Salary',amount:300},
        {id:3, text:'Books',amount:-10},
    ]
}

export const GlobalContext = createContext<GlobalState>({
    transactions:initialState.transactions,
    deleteTransaction:()=>{},
    addTransaction:()=>{}
})

type childreProps={
    children:ReactNode;
}

const GlobalProvider = ({children}:childreProps) => {

    const [transactions,setTransactions] = useState<transactioType[]>(initialState.transactions)

    const deleteTransaction = (id:number)=>{
        setTransactions(transactions.filter(tranaction=>tranaction.id!==id))
    }

    const addTransaction = (t:transactioType) => {
        setTransactions(prev=>[...prev, t])
    }

  return (
    <GlobalContext.Provider value={{transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider