import React, {useState} from 'react'

const Task = (props) => {

    const {taskArray, setTaskArray} = props
    const [toDo, setToDo] = useState("")

    const changeHandler = (e) => 
        setToDo( e.target.value)
    

    const taskValidation = (e) => {
        let isValid = true
        if (toDo.length < 2) {
            isValid = false
            console.log("There is an Error")
            return isValid
        }else{
            console.log("No Error")
            return isValid
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let isValid = taskValidation()
        if(isValid){
            console.log(`State ${JSON.stringify(toDo)}`)
            setTaskArray([...taskArray, {
                context: toDo,
                checkedDelete: false,
                id: Math.floor(Math.random() * 1000000)
            }])
            setToDo("")
        }
    }

  return (
    <div className='container'>
        <h1>To Do List</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div className="d-flex justify-content-start">
                    <h4 >Type your tasks to get done!</h4>
                </div>
                {
                    toDo && toDo.length < 2 ? <p className='text-danger mt-3'>Task must be at least 2 characters long.</p>: ""
                }
                <div className='form-floating mt-3'>
                    <input type="text"  className="form-control" id="floatingInput" placeholder="Task" value={toDo} onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Task:</label>
                </div>
                <button type="submit" className="btn btn-warning mt-3">Add</button>
            </form>
        </div>

    </div>
  )
}


    // const deleteTask = (index) => {
    //     setTaskArray.filter( (task, idx) => {
    //         idx != index
    //     }

    //     )
    // }
    
    
export default Task