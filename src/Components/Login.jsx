import React, {useState, useEffect} from 'react';

import {passwordMatch, userExists} from '../utilities';
import { TextField } from "@material-ui/core";
import ProductPage from "./ProductsPage";
import { Redirect } from "react-router-dom";
function Login(props) {
	const [login, setLogin] = useState(false);
	const [email, setEmail] = useState(null);
	

	function checkLogin(e){
		e.preventDefault();
		
		if(userExists(props, e.target.email.value)){
			
			if(passwordMatch(props, e.target.password.value)){
				setLogin(true);
				setEmail(e.target.email.value);
	
				
			}else {
				// wrong password
				alert("Invalid Credentials.");
			}
		} else {
			// new email redirect to signup.
			alert("User doesn't exist")
		}

	}


	useEffect(() => {
		if (login) {
			localStorage['login'] = true;
			localStorage['email'] = email;
			props.logedIn(login);
		}
	})
	
	
	if (login) {
		return (
			<Redirect to="/ProductPage" />
		)
		
	}
	return (
		<form id="login" onSubmit={checkLogin} >
			<TextField
				fullWidth
				type="email"
				label="email"
				id="email"
				name="email" />
			<br />
			<TextField
				fullWidth
				type="password"
				label="password"
				id="password"
				name="password" />
			<br />
			<button className="btn btn-primary" type="submit">Login</button>
		</form>		
	)
}

export default Login;
