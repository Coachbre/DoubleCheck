import React from "react";
import { Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import './styling/foodItemList.css';

const FoodItemCard = ({ foodItem, handleDelete, pantryListId }) => {
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
                <div className="itemCardButtons">
                    <Link to={`/${pantryListId}/${foodItem.id}/Update`}>
                    <Button>Update</Button>
                    </Link>
              
                    <Button onClick={() => handleDelete(foodItem.id)}>Delete</Button>
                </div>
            </CardBody>
        </Card>
    );
};


export default FoodItemCard;