import React, {useState} from 'react';
import './App.css';
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import ReducerApp from './components/reducer';
import UseEffectComponent from './components/useEffectComponent'
import UseRefHookComponent from './components/UseRefHookComponent';
import UseLayoutEffectComponent from './components/UseLayoutEffectComponent';
import ImperativeHandleComponent from './components/ImperativeHandleComponent';
import UseContextComponent from './components/UseContextComponent';

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
const completeTodo = index =>{
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const removeTodo = index =>{
  const newTodos =[...todos];
  newTodos.splice(index,1)
  setTodos(newTodos)
}


return (
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
        
    {/* <ReducerApp />
    <UseEffectComponent/>
    <UseRefHookComponent/> */}
    {/* <UseLayoutEffectComponent/> */}
    <ImperativeHandleComponent />

    <UseContextComponent/>
  </div>
);
}

export default App;
