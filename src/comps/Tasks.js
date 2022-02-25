import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTasks = async () => {
      const headers = {
        'Authorization': localStorage.getItem('token')
      }
      const data = await axios.get("http://localhost:3000/tasks", {headers})
      setTasks(data.data)
    }
    fetchTasks()
  }, [setTasks])

  const handleDelete = async (id) => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    }
    const res = await axios.delete(`http://localhost:3000/tasks/${id}`, {headers})
    const data = await axios.get("http://localhost:3000/tasks", {headers})
    setTasks(data.data)
  }

  const updateTask = async (task) => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    } 
    const updated = {
      description: task.description,
      isCompleted: !task.isCompleted
    }
    const res = await axios.patch(`http://localhost:3000/tasks/${task._id}`, updated, {headers})
    const data = await axios.get("http://localhost:3000/tasks", {headers})
    setTasks(data.data)
  }

    return (
      <div className="wrapper">
          <h2 style={{lineHeight:0}}>
            My Tasks
          </h2>
          <Link to="/create">+ Create New Task</Link>
          <div style={{marginTop:"3rem"}}>
            { tasks.length == 0 ? 
            <div>
              <h3 style={{color:"#666"}}>
                You do not have any tasks.
              </h3>
            </div>
            :
              tasks.map((task, _id) => (
              <div key={_id} className="task-wrapper" style={{borderColor: task.isCompleted ? 'green' : 'red'}} >
                <div>
                  <h3 style={{lineHeight: 0}}>{task.description} </h3>
                  <p>Assigned to: {task.assignedTo}</p>
                </div>
                <div>
                <button onClick={() => updateTask(task)}>Mark as {task.isCompleted ? "Incomplete" : "completed"}</button>
                  <button onClick={() => handleDelete(task._id)}>Delete</button>
                </div>
                </div>))
            }
          </div>
      </div>
    );
  }
  
  export default Tasks;
  