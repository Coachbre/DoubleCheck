import React from "react";
import { Button, CardBody, Card } from "reactstrap";


const FoodItemCard = ({ foodItem, handleDelete }) => {

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
                    <Button onClick={() => handleEdit(foodItem.id)}>Delete</Button>
                </div>
                <div>
                    <Button onClick={() => handleDelete(foodItem.id)}>Delete</Button>
                </div>
            </CardBody>
        </Card>
    );
};


export default FoodItemCard;