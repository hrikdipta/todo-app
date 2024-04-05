import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
function App() {
  const[todos,setTodos]=useState([]);
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,todo])
  }

  const updateTodo=(id,todo)=>{
      //todos.forEach((element)=>{if(element.id===id){element.todoMsg=todoMsg}})
      setTodos((prev)=>prev.map((element)=>(element.id===id ? todo:element )))
  }
  const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((element)=>element.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((element)=>(element.id===id?{...element,isComplited:!element.isComplited} :element )))
  }
  useEffect(()=>{
    if(todos.length>0)
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

  useEffect(()=>{
    const PrevTodos=JSON.parse(localStorage.getItem('todos'));
    if(PrevTodos!=null){
      setTodos(PrevTodos);
    }
  },[])


  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((element)=>(
              <div key={element.id} className='w-full'>
                <TodoItem todo={element}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
//setTodos((prev)=>prev.forEach((element)=>{if(element.id===id){element.isComplited=true}}))