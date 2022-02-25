import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateTask = () => {
    const [des, setDes] = useState('')
    const [assignedTo, setAssignedTo] = useState('')

    const HandleCreation = async () => {
        const data = {
            description: des, assignedTo
        }
        const headers = {
            'Authorization': localStorage.getItem('token')
        }
        try{
            const res = await axios.post("http://localhost:3000/tasks", data, {headers})
            alert("Task created successfully!")
        } catch(e) {
            console.log(e)
        }
    }
    return(
        <div className="wrapper">
            <h2>
                Create New Task
            </h2>
            <form style={{display: "flex", flexDirection: "column", width: '200px', margin: "2rem 0"}}>
        <br/>
            <label htmlFor="desc">Task Description:</label>
            <textarea value={des} onChange={(e) => setDes(e.target.value)} type="text" name="desc"></textarea>
            <br/>
            <label htmlFor="assigned">Assigned To</label>
            <input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} type="text" name="assigned"></input>
        </form>
        <button onClick={HandleCreation}>Create Task</button>
        </div>
    )
}

export default CreateTask