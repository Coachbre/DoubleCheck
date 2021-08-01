import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";

const AddFoodItemForm = () => {
    const history = useHistory();
    const { pantryListId } = useParams();
    const [foodItem, setFoodItem] = useState({
        categoryId: 1,
        // ^^ change for stretch goal
        pantryListId: pantryListId,
        name: "",
        quantity: "",
        notes: ""
    });
    //initial state of foodItem is user input

    const handleInputChange = (event) => {
        const newFoodItem = { ...foodItem }
        let selectedValue = event.target.value
        newFoodItem[event.target.id] = selectedValue
        setFoodItem(newFoodItem)
    };

    const handleSave = () => {
        addFoodItem(foodItem)
            .then(() => history.push(`/Pantry/${pantryListId}`));
    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" id="name" placeholder="Item Name"
                    required value={foodItem.name}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Quantity"
                    required value={foodItem.quantity}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes:</Label>
                <Input type="textarea" name="notes" id="notes" placeholder="Notes"
                    required value={foodItem.notes}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
            </FormGroup>
        </Form>
    );
};

export default AddFoodItemForm;