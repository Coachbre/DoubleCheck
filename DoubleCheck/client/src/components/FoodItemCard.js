import React, { useEffect } from "react";
import { Button, CardBody, Card } from "reactstrap";

const FoodItemCard = ({ foodItem }) => {
    return (
        <Card>
            <CardBody>

                        <td>{foodItem.name}</td>
                        <td>{foodItem?.quantity}</td>
                        <td>{foodItem?.notes}</td>
                        {/* <li>Category: {foodItem?.categoryId}</li> */}

            </CardBody>
            {/* <Button onClick={editSelectedFoodItem}>Update</Button> */}
            {/* <Button onClick={deleteSelectedFoodItem}>Delete</Button> */}
        </Card>
    );
};

export default FoodItemCard;