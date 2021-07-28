import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../modules/authManager";
// import logo1 from "../images/logo1.png";


export default function Register() {
    const history = useHistory();

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const registerClick = (e) => {
        e.preventDefault();
            const userProfile = { name, email };
            register(userProfile)
                .then(() => history.push("/"));
    };

    return (
        <Form onSubmit={registerClick} className="form">
            {/* <img className="logo1" src={logo1} alt="logo1" /> */}
            <fieldset className="loginform">

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input id="firstName" type="text" onChange={e => setName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Button className="loginbutton">Register</Button>
                </FormGroup>
            </fieldset>
        </Form>
    );
}
