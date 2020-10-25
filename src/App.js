import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {addUser} from "./actions/index";
import { useDispatch } from "react-redux";

import Login from './Components/Login';
import Signup from './Components/Signup';
import ProductPage from "./Components/ProductsPage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
function App() {
  const dispatch = useDispatch();
  const [users, ] = useState([]);
  const [logedIn, setLoginedIn] = useState(false);
  
  
  if (localStorage.getItem("user")) {
    const j = JSON.parse(localStorage.getItem("user"))
    users.push(...j);
    j.forEach((val) => {
      dispatch(addUser(val));
    })
  
      
  }
  
  

  function updateStore(user) {
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users))
  }

  function signIn(bool = false) {
    setLoginedIn(bool);
  }
  
  useEffect(() => console.log(logedIn), [logedIn])
    const logedin = localStorage['login'];

	return (
    
       

    <div>
      {!(logedin) &&
        <div id="links">
        <Link className="link btn btn-primary"  to="/signup">Signup</Link>
        <Link className="link btn btn-primary" to="/login">Login</Link>
      </div>
      }
      <Switch>
      <Route component={() => <Signup register={updateStore} user={users}/>} exact path="/" />
        <Route component={() => <Signup register={updateStore} user={users}/>} exact path="/signup" />
        <Route component={() => <Login user={users} logedIn={signIn} />} exact path="/login" />
        <Route component={() =><Cart />} exact path="/Cart"/> 
        <Route component={() =><ProductPage />} exact path="/ProductPage/"/> 
        <Route render={(props) =><Checkout {...props}/>} exact path="/Checkout/"/> 
      </Switch>
      </div>
    
  	);
}

export default App;
