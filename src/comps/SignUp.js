import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const HandleSignup = async () => {
        const data = {
            name: name,
            age: age,
            email: email,
            password: password
        }
        try{
            const res = await axios.post("http://localhost:3000/users", data)
            navigate("/signin?created=true")
        } catch(e) {
            console.log(e)
        }
    }
    return (
    <div className="wrapper">
        <h1>
            Sign Up to create a new account
        </h1>
        <form style={{display: "flex", flexDirection: "column", width: '200px', margin: "2rem 0"}}>
        <br/>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name"></input>
            <br/>
            <label htmlFor="age">Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" name="age"></input>
            <br/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email"></input>
            <br/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
        </form>
        <button onClick={HandleSignup}>Sign Up</button>
    </div>
    );
  }
  
  export default SignUp;
  