import React, { useEffect } from "react";
import { Button, CardBody, Card } from "reactstrap";

const FoodItemCard = ({ foodItem }) => {
    return (
        <Card>
            <CardBody>
                <ul>
                    <li>{foodItem.name}</li>
                    <li>Quantity: {foodItem?.quantity}</li>
                    <li>Notes: {foodItem?.notes}</li>
                    <li>Category: {foodItem?.categoryId}</li>
                </ul>
            </CardBody>
            {/* <Button onClick={editSelectedFoodItem}>Update</Button> */}
            {/* <Button onClick={deleteSelectedFoodItem}>Delete</Button> */}
        </Card>
    );
};

export default FoodItemCard;