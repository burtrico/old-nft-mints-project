import { Route, Switch, Router } from 'react-router-dom';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';
import AuthenticatedApp from './AuthenticatedApp';






function App() {

  const [currentUser, setCurrentUser] = useState(null)

  
  


  function handleUser(username) {
    console.log("In App,", username )
    const userBurt = {id: 1, username: "Burt", email: "burtrico@gmail.com", password: "1234"}
    setCurrentUser(userBurt)
    
  }

  ///// Fetch Gallery pics 


  


  //POST to Portfolio





  

  



  return (
    <div>
     <Router>
    <Switch>
      <Route path="/proposals">
        <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
        />
      </Route>
      {/* <Route path="/portfolio">
        <Portfolio
        renderUser={loggedUser}
          />
      </Route>
      <Route path="/reviews">
        <Reviews
        />
      </Route> */}
      <Route path="/">
        <Login 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          addUser={handleUser}
        />
      </Route>

    </Switch>
    </Router>
    </div>
  );
}

export default App;