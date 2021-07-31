import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { register } from "../modules/authManager";
// import logo1 from "../images/logo1.png";


export default function Register() {
    const history = useHistory();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const user = { name, email };
            register(user, password)
                .then(() => history.push("/"));
        }
    };

    return (
        <Form onSubmit={registerClick} className="form">
            {/* <img className="logo1" src={logo1} alt="logo1" /> */}

            <fieldset className="loginform">
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" onChange={e => setName(e.target.value)} />
                </FormGroup>
              
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Button className="loginbutton">Register</Button>
                </FormGroup>
                <em>
                <Link to="login">Back to Login</Link>
                </em>
            </fieldset>
        </Form>
    );
}