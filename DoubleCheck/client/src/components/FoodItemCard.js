import React from "react";
import { deleteFoodItem } from "../modules/foodItemManager";
import { Button, CardBody, Card } from "reactstrap";


const FoodItemCard = ({ foodItem }) => {

    const handleDelete = (event) => {
        event.preventDefault();
        deleteFoodItem(foodItem.id)
            .then(() => {getItems()})
    }


    return (
        <Card>
            <CardBody>
                {/* <li>Category: {foodItem?.categoryId}</li> */}
                <div>
                    <td>{foodItem.name}: {foodItem?.quantity}</td>
                </div>
                <div>
                    <td>Notes: {foodItem?.notes}</td>
                </div>
                <div>
                    <Button>Update</Button>
                </div>
                <div>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </CardBody>
        </Card>
);
};


export default FoodItemCard;