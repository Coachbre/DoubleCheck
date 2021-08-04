import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { editFoodItem, getFoodItemById } from "../modules/foodItemManager";
import './styling/addAndEditItems.css'; 

const EditFoodItemForm = () => {
    const { foodItemId, pantryListId } = useParams();
    const history = useHistory();

    const [foodItem, setFoodItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // initial state set to false

    const getFoodItem = () => {
        getFoodItemById(foodItemId).then(foodItem => setFoodItem(foodItem));
    };

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const newFoodItem = { ...foodItem };
        newFoodItem[key] = value;
        setFoodItem(newFoodItem);
    }

    const handleEdit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        let newFoodItem = { ...foodItem };
        
        editFoodItem(newFoodItem).then(() => history.push(`/${foodItem.pantryListId}`))
    }


    useEffect(() => {
        getFoodItem(foodItemId);
    }, []);

    return (
        <>
        <div className="editAndAddBody">
            <h3>Update {foodItem.name}</h3>
            <Form>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" name="name" id="name" placeholder="Item name"
                        defaultValue={foodItem.name}
                        onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="quantity">Quantity:</Label>
                    <Input type="number" name="quantity" id="quantity" placeholder="Quantity"
                        defaultValue={foodItem.quantity}
                        onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="notes">Notes:</Label>
                    <Input type="textarea" name="notes" id="notes" placeholder="Notes"
                        defaultValue={foodItem.notes}
                        onChange={handleInputChange} />
                </FormGroup>

            
                <Button className="btn btn-primary" onClick={handleEdit} disabled={isLoading}>Save</Button>
                    <Button className="btn btn-primary"><Link to={`/${pantryListId}`}>Back</Link></Button>
              
            </Form>
            </div>
        </>
    );
};
export default EditFoodItemForm;