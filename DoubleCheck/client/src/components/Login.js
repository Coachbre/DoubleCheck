import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { login } from "../modules/authManager";
import './styling/loginRegister.css';

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => history.push("/"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <body className="loginPage">
            <div className="loginForm">
        <Form onSubmit={loginSubmit} className="">
            {/* <img className="logo1" src={logo1} alt="logo1" /> */}
            
            <fieldset className="loginSection">
                <h3>User Login</h3>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Button className="loginbutton">Login</Button>
                </FormGroup>
                <em>
                    Don't have an account? <Link to="register">Sign up here</Link>
                </em>
            </fieldset>
        </Form>
        </div>
        </body>
    );
}