import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Tasks from './Tasks'
import Home from './Home'
import UserContext from "../context";
import CreateTask from "./CreateTask";

function Router() {
    const {loggedIn, user} = useContext(UserContext);
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {(user == undefined) ? (
          <>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
          </>
        ) :(
          <>
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/create" element={<CreateTask/>} />
          </>
        )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default Router;