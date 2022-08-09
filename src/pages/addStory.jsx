import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import NavbarC from "./nav";

const AddStory = () => {

    const [input, setInput] = useState({
        title: "",
        price: "",
        description: "",
        inage: "https://i.pravatar.cc",
        category: ""
    })

    const AddData = (e) => {
        e.preventDefault();
        let url = 'https://fakestoreapi.com/products';
        axios.post(url, input).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    };

    useEffect(() => {
        // AddData();
    }, [])

    return (
        <div>
            <NavbarC />
            <div>
                <Form onSubmit={AddData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={(e) => setInput({ ...input, title: e.target.value })} value={input.title} placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" onChange={(e) => setInput({ ...input, price: e.target.value })} value={input.price} placeholder="Enter Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e) => setInput({ ...input, description: e.target.value })} value={input.description} placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="category" onChange={(e) => setInput({ ...input, category: e.target.value })} value={input.category} placeholder="Enter Category" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default AddStory;