import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavbarC from "./nav";

const ViewDetails = (props) => {
    const navigate = useNavigate();

    let { state } = useLocation();
    const [isLogin, setisLogin] = useState(() => {
        return JSON.parse(localStorage.getItem('login')) != null
    })
    let API = `https://fakestoreapi.com/products/${state.id}`;
    const [ApiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    const AxiosFetchData = (url) => {
        axios.get(url).then(res => {
            setLoading()
            setApiData(res.data);
        }).catch(err => {
            console.log(err)
        })
    };

    const AuthUser = () => {
        let valid_cred = {
            "username": "root",
            "password": "root"
        }
        let cred = JSON.parse(localStorage.getItem('login'));
        if (cred.username !== valid_cred.username || cred.password !== valid_cred.password) {
            localStorage.removeItem('login');
        }
    }

    useEffect(() => {
        if (isLogin) AuthUser();
        AxiosFetchData(API)
    }, [])

    if (!isLogin) {
        return (
            <div>
                <h1>Not Logged In , Login To View Product Details</h1>
                <div>
                    <Button variant="primary" type="submit" onClick={() => {
                        navigate('/Login')
                    }}>
                        Login
                    </Button></div>
            </div>
        )
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <NavbarC />

            <div className="product-grid">
                {ApiData.length != 0 ?
                    <div className="border">
                        <span >{ApiData.title}</span>
                        <p >Price: <span style={{ fontWeight: "bold" }}>₹ {ApiData.price}</span></p>
                        <img src={ApiData.image} style={{ height: "100px" }} />
                        <p>Rating: {ApiData.rating.rate} ({ApiData.rating.count} Review)</p>
                    </div>
                    : 'NO DATA FOUND'}
            </div>
        </div>
    );
};

export default ViewDetails;