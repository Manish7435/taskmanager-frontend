import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context";

function Home() {
    const {user} = useContext(UserContext)
    return (
        user == undefined ?
      <div className="home-wrapper">
          Please <Link to="/signin">Sign In</Link> or <Link to="/signup">Sign Up</Link> to continue.
      </div> :
      <div className="home-wrapper">
          <h2>
            Welcome, {user.name}! <br/>
          </h2>
          Go to <Link to="/tasks">My Tasks</Link> to see all your tasks
      </div>
    );
}

export default Home;
