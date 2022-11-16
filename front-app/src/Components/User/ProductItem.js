import React from "react";
import { Card, Col, Button, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import "../admin/style.css";
import axios from "axios";
function ProductItem({ type, prix, kilometrage, image, disponibilite, _id }) {
    const navigate = useNavigate();
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    const handleReserve = () => {
        if (!token) {
            navigate("/connecter");
        }
        axios
            .post(
                `/api/reservation_car?id=${_id}&userId=${idUser}`,
                {},
                {
                    headers: {
                        jwt: token,
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.dir(err));
    };
    return (
        <Col>
            <Card id="card-item">
                <div id="dorpdown">
                    <Button
                        id="dropdown-button-drop"
                        variant="light"
                        onClick={() => {
                            handleReserve();
                        }}
                    >
                        Reserve
                    </Button>
                </div>
                <div>
                    <Card.Img
                        id="card-image"
                        variant="top"
                        src={image}
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>{type}</Card.Title>
                        <Card.Subtitle> {prix} TND </Card.Subtitle>
                        <Card.Text>{kilometrage}</Card.Text>
                        {disponibilite === "oui" ? (
                            <Card.Footer
                                style={{ color: "green", fontWeight: "bold" }}
                            >
                                Disponible
                            </Card.Footer>
                        ) : (
                            <Card.Footer
                                style={{ color: "red", fontWeight: "bold" }}
                            >
                                Out of stock
                            </Card.Footer>
                        )}
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
}

export default ProductItem;