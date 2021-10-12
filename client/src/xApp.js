import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  // useEffect(() => {
  //   fetch('/api/me', {
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setCurrentUser(user)
  //           setAuthChecked(true)
  //         })
  //       } else {
  //         setAuthChecked(true)
  //       }
  //     })
  // }, [])

  // if(!authChecked) { return <div></div>}
  return (
    <div>

   
  <Router>
  <nav>
    <span>
    {/* <NavLink to="/groups">Groups</NavLink>{" - "} */}
    <NavLink to="/proposals">: Proposals :</NavLink>
  </span>
  </nav>
  <Switch>
    
    
      {/* currentUser ? ( */}
        <Route path="/proposals">
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
          </Route>
        {/* ) : (
          {/* <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          /> */}
        {/* ) */}
   

    </Switch>
     </Router>
    </div>
    
  )
}

export default xApp
