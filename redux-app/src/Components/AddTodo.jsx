import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Features/Todo/todoSlice'

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('')
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>Add Todo</div>
      <form onSubmit={addTodoHandler}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
