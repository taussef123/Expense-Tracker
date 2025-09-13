import {create} from "zustand"
import {persist} from "zustand/middleware"
export const useExpense = create(   persist(    // persist is used to store it permanently
    (set)=>({     // set is used    to   update the data 
expenses:[],
setExpense:(payload)=>set((state)=>({ // payload is the data which we submit by submit button after filling the form and here state is a store and in the store we get state and from the state we want expense so we shall get state.expenses and we want previous as it is so we shall spread it
    expenses:[...state.expenses,payload]  // ...state.expenses denote old data and payload define new data 
})),
    deleteExpense:(id)=>set((state)=>({
      expenses: state.expenses.filter((item)=>item.id!==id)  
    })),
    updateExpense:(id,payload)=>set((state)=>({
       expenses:state.expenses.map((item)=>{
       return  item.id ===id ? {...item,...payload}:item
       }) 
    }))
    }),
   
    {name:'expenses'} // this states that it will store in localstorage by expenses name

))