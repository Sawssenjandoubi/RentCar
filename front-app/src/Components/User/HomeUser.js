import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Row, Button, Form } from "react-bootstrap";
import ProductItem from "./ProductItem";
// import "./style.css";
function HomeUser() {
    const [products, setProducts] = useState();
    const [show, setShow] = useState(false);
    const [showMin, setShowMin] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    useEffect(() => {
        if (!show) {
            axios
                .get("/api/get_all_car")
                .then((response) => setProducts(response.data.products))
                .catch((err) => console.dir(err));
        } else {
            axios
                .get("/api/available_car")
                .then((response) => setProducts(response.data.data))
                .catch((err) => console.dir(err));
        }
    }, [products]);
    const handleAvailableProducts = () => {
        setShow(!show);
    };
    const handleMinRange = async (e) => {
        await setMin(e.target.value * 10);
    };
    const handleMaxRange = (e) => {
        setMax(e.target.value * 100);
    };
    return (
        <div id="products-container">
            {products ? (
                <div id="products-list">
                    <div id="product-list-header">
                        <h1>Produts List</h1>
                        <div id="price-container">
                            <div id="min-price">
                                <Form.Label>Min</Form.Label>
                                <Form.Range
                                    id="min-range"
                                    defaultValue={0}
                                    onChange={(e) => {
                                        handleMinRange(e);
                                    }}
                                />
                                <span>{min}</span>
                            </div>
                            <div id="max-price">
                                <Form.Label>Max</Form.Label>
                                <Form.Range
                                    id="max-range"
                                    defaultValue={0}
                                    onChange={(e) => {
                                        handleMaxRange(e);
                                    }}
                                />

                                <span>{max}</span>
                            </div>
                        </div>
                        <Button
                            variant="dark"
                            onClick={() => {
                                handleAvailableProducts();
                            }}
                        >
                            {show ? "Reset" : "Show available product"}
                        </Button>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {products
                            .filter((product) => {
                                return min && !max
                                    ? product.prix >= min
                                    : max && !min
                                    ? product.prix <= max
                                    : min && max
                                    ? product.prix >= min &&
                                      product.prix <= max
                                    : product;
                            })
                            .map((product) => {
                                return (
                                    <ProductItem
                                        key={product._id}
                                        {...product}
                                    />
                                );
                            })}
                    </Row>
                </div>
            ) : (
                <div id="spinner">
                    <BeatLoader
                        color="#4c4c4c"
                        margin={9}
                        size={30}
                        speedMultiplier={1}
                    />
                </div>
            )}
        </div>
    );
}

export default HomeUser;