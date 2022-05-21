import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './reducers/tasks';
import { deleteTask} from './reducers/tasks';
import { importantTask } from './reducers/tasks';
import { doneTask } from './reducers/tasks';
import './TodoMain.css'


function TodoMain() {

  const dispatch = useDispatch()
   const todos = useSelector((store) => store.tasks.todos);
   
   const[task, setTask] = useState('')

  return (
    <div className="todoMain">
      <div className='pageContainer'>
      <div>
        <input className='input' value={task} type="text" onChange = {(e) => setTask(e.target.value)}/>

        <button className='btnInput' type='button' onClick={() => {
          dispatch(addTask(task));
          setTask('') 
          }}>
            Add
        </button>

      </div>
      <ul className='pismoContainer'>
        {
          todos.map((item) => (
            <li key={item.id} 
                style={{margin: '0px 0', 
                color: item.isImportant? 'red' : '',
                textDecoration: item.isDone? 'line-through' : ''}}
            >
                  {item.title}
                
                  <button style={{marginLeft: "10px"}} type="button" onClick={
                    () => dispatch(deleteTask(item.id))}>Delete
                  </button>

                  <button type='button' onClick={
                    () => dispatch(importantTask(item.id))}>Main
                  </button>

                  <button type='button' onClick={
                    () => dispatch(doneTask(item.id))}>Done
                  </button>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  );
}

export default TodoMain;