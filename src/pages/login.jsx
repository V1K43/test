import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import NavbarC from "./nav";

const UserLogin = () => {

    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const LoginFunction = (e) => {
        e.preventDefault();
        localStorage.setItem('login', JSON.stringify(input));
        const items = JSON.parse(localStorage.getItem('login'));
        console.log(items);
    }

    return (
        <div>
            <NavbarC />
            <div>
                <Form onSubmit={LoginFunction}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" onChange={(e) => setInput({ ...input, username: e.target.value })} value={input.username} placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="password" onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default UserLogin;