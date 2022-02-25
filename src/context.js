import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState({});
  const [user, setUser] = useState(undefined)
  useEffect(() => {
        const raw_user = localStorage.getItem('user')
        const user = JSON.parse(raw_user)
        setUser(user)
  }, [])
  return (
    <UserContext.Provider value={ {loggedIn, user, setUser} }>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserProvider };