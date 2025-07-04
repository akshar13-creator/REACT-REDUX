import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
