import React from "react";
import { Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";


const FoodItemCard = ({ foodItem, handleDelete }) => {

    return (
        <Card>
            <CardBody>
                {/* <li>Category: {foodItem?.categoryId}</li> */}
                <div>
                    <td>{foodItem.name}: {foodItem?.quantity}</td>
                </div>
                <div>
                    <td>Notes: {foodItem.notes}</td>
                </div>
                <div>
                    <Link to={`${pantryListId}/Update/${foodItem.name}`}>
                    <Button>Update</Button>
                    </Link>
                </div>
                <div>
                    <Button onClick={() => handleDelete(foodItem.id)}>Delete</Button>
                </div>
            </CardBody>
        </Card>
    );
};


export default FoodItemCard;