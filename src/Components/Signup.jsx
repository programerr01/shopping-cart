import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {encrypt, userExists} from '../utilities';
import {TextField } from "@material-ui/core";
import { addUser } from "../actions/index";
import { useDispatch } from "react-redux";

let data = {};
function Signup(props) {
    const dispatch = useDispatch();
	const [signedUp, setSignedUp] = useState(false);


    
    function createAccount(e) {
        e.preventDefault();
        
        

        if (e.target.pwd1.value !== e.target.pwd2.value) {
            alert("Mismatch password!");
        }else if (userExists(props, e.target.email.value)){
            alert("Already registered with this email address.");
        }else {
            console.log(encrypt(e.target.email.value, e.target.pwd1.value));
	    
        data = {
            Name: e.target.name.value,
            Password: encrypt(e.target.email.value, e.target.pwd1.value),
            Email: e.target.email.value,
            PhoneNo: e.target.phone.value,
        }
            dispatch(addUser(data));
	    props.register(data);          

		setSignedUp(true);	
        }
    }

	useEffect(() => console.log(signedUp), [signedUp]);
	if (signedUp) {
		return <Redirect to="/login"/>
	}

    return (
        <div >
        <form id="signup" onSubmit={createAccount} >
            <TextField
                type="text"
                label="Name"
                id="name"
                fullWidth
                name="name"
                required
            />
            <br />
            <TextField
                type="email"
                label="Email"
                fullWidth
                id="email"
                name="email"
                required />
            <br />
            <TextField
                type="text"
                label="Mob. No."
                fullWidth
                id="phone"
                name="phone"
                required
            />
            <br />
            <TextField
                type="password"
                label="Password"
                id="pwd1"
                fullWidth
                name="pwd1"
                required
            />
            <br />
            <TextField
                type="password"
                label="Confirm Password"
                fullWidth
                id="pwd2"
                name="pwd2"
                required
            />
            <br />

            <button
                className="btn btn-primary"
                type="submit"
                id="btn"
            >SignUp
             </button>
            </form>
            {/* <ProductPage /> */}
        </div>
    )
}

export default Signup;