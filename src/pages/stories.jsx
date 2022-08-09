import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavbarC from "./nav";

const Stories = () => {
    let API = "https://fakestoreapi.com/products";
    const [ApiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(0)
    const [selectedProduct, setselectedProduct] = useState({})

    let navigate = useNavigate();
    const AxiosFetchData = (url) => {
        axios.get(url).then(res => {
            console.log(res);
            setLoading()
            setApiData(res.data);
        }).catch(err => {
            console.log(err)
        })
    };

    const ViewDetails = (id) => {
        navigate("/ViewDetails", { state: { id } });
    }

    useEffect(() => {
        setselectedProduct(ApiData.filter(item => item.id = id)[0]);
        console.log('in')
    }, [id])

    useEffect(() => {
        AxiosFetchData(API)
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <NavbarC />
            <div>
                <h1>{selectedProduct?.title}</h1>
            </div>
            <div className="product-grid">
                {ApiData.length != 0 ?
                    ApiData.map((item, key) => (
                        <div className="border" key={key} onClick={() => setId(item.id)}>
                            <span >{item.title}</span>
                            <p >Price: <span style={{ fontWeight: "bold" }}>₹ {item.price}</span></p>
                            <img src={item.image} style={{ height: "100px" }} />
                            <p>Rating: {item.rating.rate} ({item.rating.count} Review)</p>
                            <button onClick={() => ViewDetails(item.id)}>
                                View
                            </button>
                        </div>
                    ))
                    : 'NO DATA FOUND'}
            </div>
        </div>
    );
};

export default Stories;