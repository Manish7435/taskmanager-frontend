import axios from 'axios';
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import UserContext from '../context';

function Header() {
    const {user, setUser} = useContext(UserContext)
    const headers = {
        'Authorization': localStorage.getItem('token')
    }
    const navigate = useNavigate()
    const handleSignout = async () => {
        try{
            const _user = {...user, token: localStorage.getItem('token')}
            const res = await axios.post("http://localhost:3000/users/logout", _user, {
                headers: headers
            })
            localStorage.clear()
            setUser(undefined)
            navigate('/')
        } catch(e) {
            console.log(e)
        }

    }
    return (
      <div className="header-wrapper">
          <div>
          <Link className="logo" to="/">
              Task Manager
          </Link>
          </div>
          <div className="actions">
              {
                  user == undefined ? <Link className='link' to="/signin">Sign In</Link>
                  :
                  <div style={{display:"flex", flexDirection:"row", gap:"20px", alignItems:"center", justifyContent:"center"}}>
                      <div>
                        <span className='username'>Logged in as:</span>
                        <span className='email'>{user.email}</span>
                      </div>
                      <button onClick={handleSignout}>Sign Out</button>
                  </div>
              }
          </div>
      </div>
    );
  }
  
  export default Header;
  