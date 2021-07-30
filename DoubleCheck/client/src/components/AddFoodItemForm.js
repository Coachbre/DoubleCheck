import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";

const FoodItemForm = () => {
    const { pantryListId } = useParams();
    const history = useHistory();

    const [foodItem, setFoodItem] = useState({
        pantryListId: pantryListId,
        categoryId: 1,
        // ^^ change for stretch goal
        name: "",
        quantity: "",
        notes: ""
    });

    const handleInputChange = (evt) => {
        const newFoodItem = { ...foodItem }
        let selectedValue = evt.target.value
        newFoodItem[evt.target.id] = selectedValue
        setFoodItem(newFoodItem)
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
                <Input type="text" name="name" id="name" placeholder="Item Name" required
                    value={foodItem.name}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Quantity" required
                    value={foodItem.quantity}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes:</Label>
                <Input type="textarea" name="notes" id="notes" placeholder="Notes" required
                    value={foodItem.notes}
                    onChange={handleInputChange} />
            </FormGroup>

            <Button className="btn btn-primary" onClick={handleSave}>Add</Button>
        </Form>
    );
}