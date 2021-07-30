import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";

const AddFoodItemForm = () => {
    // const { pantryListId } = useParams();
    const history = useHistory();
    const { pantryListId } = useParams();


    const emptyFoodItem = {
        pantryListId: pantryListId,
        categoryId: 1,
        // ^^ change for stretch goal
        name: "",
        quantity: "",
        notes: ""
    };

    const [foodItem, setFoodItem] = useState(emptyFoodItem);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const foodItemCopy = { ...foodItem };

        foodItemCopy[key] = value;
        setFoodItem(foodItemCopy);
    };



    const handleSave = (evt) => {
        evt.preventDefault();
        addFoodItem(foodItem)
            .then(() => history.push(`/Pantry/${pantryListId}`));
    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" id="name" placeholder="Item Name"
                    defaultValue={foodItem.name} onChange={event => setFoodItem({ name: event.target.value })} />
            </FormGroup>

            <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Quantity"
                    defaultValue={foodItem.quantity} onChange={event => setFoodItem({ quantity: event.target.value })} />
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes:</Label>
                <Input type="textarea" name="notes" id="notes" placeholder="Notes"
                    defaultValue={foodItem.notes} onChange={event => setFoodItem({ notes: event.target.value })} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={handleSave}>Add</Button>
        </Form>
    );
};

export default AddFoodItemForm;