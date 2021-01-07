import React,{createContext,useContext,useReducer} from "react"

export const StateContext=createContext()//preparing the datalayer,this creates context where the data layer lives means the first layer through which the data is accessed

export const StateProvider=({reducer,initialState,children})=>(//reducer,initialState,children are called as higher order components
    <StateContext.Provider value={useReducer(reducer,initialState)}>{/**it sets the data in the data layer */}
        {children}{/**this refers to app component */}
    </StateContext.Provider>
)

export const useStateValue=()=>useContext(StateContext)//used to pull the data from the data layer