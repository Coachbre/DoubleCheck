import React, { useEffect } from "react";
import { Button, CardBody, Card } from "reactstrap";

const FoodItemCard = ({ foodItem }) => {
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
            <Button>Delete</Button>
            </div>
            </CardBody>
            {/* ^^^^ onClick={event to complete} will be needed */}
        </Card>
    );
};

export default FoodItemCard;