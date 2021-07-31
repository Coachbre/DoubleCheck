import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteFoodItem } from "../modules/foodItemManager";
import { Button, CardBody, Card } from "reactstrap";


const FoodItemCard = ({ foodItem, getItems }) => {
    const history = useHistory();
    const { pantryListId } = useParams();

    const handleDelete = (event) => {
        event.preventDefault();
        deleteFoodItem(foodItem.id)
            .then(() => {
                getItems()
            })
            .then(() => {
                history.push(`/Pantry/${pantryListId}`)
            })
    }
};

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


export default FoodItemCard;