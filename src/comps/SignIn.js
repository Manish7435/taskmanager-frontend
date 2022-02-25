import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context";
import {useNavigate, useSearchParams} from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const [searchParams, setSearchParams] = useSearchParams();
    const newUser = searchParams.get("created")
    const navigate = useNavigate()
    const handleSignIn = async () => {
        try{

            const data = await axios.post("http://localhost:3000/users/login", {
                email: email,
                password: password
            })
            const token = data.data.token
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(data.data.user))
            setUser(data.data.user)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
        
    }
    return (
    <div className="wrapper">
        {
            newUser && (<div className="notification">
                <p><b>Account created successfully!</b> You can now Sign In to your account.</p>
            </div>)
        }
        <h1>
            Sign In to your account
        </h1>
        <form style={{display: "flex", flexDirection: "column", width: '200px', margin: "2rem 0"}}>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email"></input>
            <br/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
        </form>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
