import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllCarItem from "./GetAllCarItem";
import { BeatLoader } from "react-spinners";
import { Row, Button } from "react-bootstrap";
import DashboardAdmin from './DashboardAdmin'
function GetAllCarList() {
    const [cars, setCars] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!show) {
            axios
                .get("/api/get_all_car")
                .then((response) => setCars(response.data.cars))
                .catch((err) => console.dir(err));
        }
        //  else {
        //     axios
        //         .get("/api/admin/products/available")
        //         .then((response) => setProducts(response.data.data))
        //         .catch((err) => console.dir(err));
        // }
    }, [cars]);
    const handleAvailableCars = () => {
        setShow(!show);
    };
    return (
        <div id="products-container">
            <div>
                <DashboardAdmin/>
            </div>
            {cars ? (
                <div id="products-list">
                    <div id="product-list-header">
                        <h1>Produts List</h1>
                        <Button
                            variant="dark"
                            onClick={() => {
                                handleAvailableCars();
                            }}
                        >
                            {show ? "Reset" : "Show available product"}
                        </Button>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {cars.map((car) => {
                            return (
                                <GetAllCarItem key={car._id} {...car} />
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

export default GetAllCarList;