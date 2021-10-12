import './App.css';
// import GroupsContainer from './components/GroupsContainer'
import ProposalsContainer from './components/ProposalsContainer'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  // const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/api/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // history.push('/')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <span>
          {/* <NavLink to="/groups">Groups</NavLink>{" - "} */}
          <NavLink to="/api/proposals">: Proposals :</NavLink>
          <NavLink to="/api/users">: Users :</NavLink>
        </span>
        <span>Current User = {currentUser.username} <button onClick={handleLogout}> Logout </button></span>
      </nav>
      <Switch>
      <Route path="/api/proposals">
          <ProposalsContainer currentUser={currentUser} />
        </Route>
        <Route path="/api/proposals">
          <ProposalsContainer currentUser={currentUser} />
        </Route>
        <Redirect to="/api/proposals"/>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
