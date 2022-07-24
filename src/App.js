import React, {useState} from 'react';
import './App.css';
import Todo from './components/todo'
import TodoForm from './components/todoForm'




function App() {
const [todos, setTodos] = useState([{
  text:'Learn about react',
  isCompleted: false
},
{
  text:'Meet friend for lunch',
  isCompleted: false
},
{
  text:'Build really cool todo app',
  isCompleted: false
}
])

const addTodo = text =>{
  const newTodos = [...todos, {text}]
  setTodos(newTodos)
}

return (
  <div className='app'>
    <div className='todo-list'>
      {todos.map((todo, index)=>(
        <Todo key ={index} index={index} todo={todo} />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  </div>
)
}

export default App;
