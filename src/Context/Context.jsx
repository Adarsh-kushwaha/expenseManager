import React, { createContext, useReducer } from "react";
import ContextReducer from "./ContextReducer";

const initialState=[];
export const ExpenseTrackerContext = createContext(initialState)

const Provider = (props) => {
    const [transactions, dispatch] = useReducer(ContextReducer, initialState);

    //action controller

    const deleteTransaction = (id) => dispatch({type:"DELETE", payload:id});
    const addTransaction = (transaction) => dispatch({type:"ADD", payload:transaction});

    const totalBalance = transactions.reduce((acc, currVal)=>{
        return (currVal.type==="Expense" ? acc - currVal.amount : acc + currVal.amount)
    },0)

   
    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions, totalBalance}}>
            {props.children}
        </ExpenseTrackerContext.Provider>
    )
}

export default Provider;
