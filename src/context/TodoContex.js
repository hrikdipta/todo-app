import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos:[
        {
            id: Number,
            todoMsg:"Todo msg",
            isComplited:false
        }
    ],
    addTodo:(todoMsg)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})


export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider;