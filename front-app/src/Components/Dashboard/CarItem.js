import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CardProviderReservation from "./CardProviderReservation";

// import './style.css'
function CarItem({ type, image, kilometrage, prix, disponibilite, _id }) {
  const handleDelete = () => {
    axios
      .delete(`/api/delete_car/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.dir(err));
  };

  return (
    <div>
      <Col style={{ marginTop: "50px" }}>
        <Card id="card-item">
          <div id="dorpdown">
            <DropdownButton
              id="dropdown-button-drop"
              size="sm"
              variant="light"
              title=""
            >
              <Dropdown.Item eventKey="1" as={Link} to={`/UpdateCar/${_id}`}>
                Update product
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                eventKey="2"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete product
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <Card.Img id="card-image" variant="top" src={image} width="150%" />
            <Card.Body>
              <Card.Title>Type : {type}</Card.Title>
              <Card.Subtitle>Prix : {prix} TND </Card.Subtitle>
              <Card.Text>Disponibilité : {disponibilite}</Card.Text>
              <Card.Text> kilometrage : {kilometrage}</Card.Text>
              {disponibilite ? (
                <Card.Footer style={{ color: "green", fontWeight: "bold" }}>
                  Disponible
                </Card.Footer>
              ) : (
                <Card.Footer style={{ color: "red", fontWeight: "bold" }}>
                  non disponible
                </Card.Footer>
              )}
            </Card.Body>
          </div>
        </Card>
        <CardProviderReservation carid={_id} />
      </Col>
    </div>
  );
}
export default CarItem;
