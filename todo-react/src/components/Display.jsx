import React, { useState } from 'react'

const Display = (props) => {

    const {taskArray, setTaskArray} = props

    
    const handleCompleted = (todo) => {
        todo.checkedDelete = !todo.checkedDelete;
        let updateTaskArray = [...taskArray];
        setTaskArray(updateTaskArray);
    }
    
    const deleteTask = (idFromBelow) => {
        setTaskArray(
            taskArray.filter( (task, index) => 
            task.id !== idFromBelow)
        )
        
    }

  return (
    <div className="container">
        {
            taskArray.map( (todo) => (

                <div className=" col-10 d-flex bg-secondary p-4 mr-3 rounded mt-3 align-items-center" key ={todo.id}>
                    {
                        todo.checkedDelete ? <p className=" col-5 text-white text-break text-decoration-line-through fs-2">{todo.context}</p>: <p className=" col-5 text-white text-break fs-2">{todo.context}</p>
                    }
                    <div className="form-check col-2 p-3">
                        <input type="checkbox"  name="checkbox" className="form-check-input" id="flexCheckDefault" onChange={(e) => handleCompleted(todo)}/>
                    </div>
                    <button onClick={(e)=> deleteTask(todo.id)} className="btn btn-dark col-3">Delete</button>
                </div>
            
            )

            )
        }
    </div>
  )
}

export default Display