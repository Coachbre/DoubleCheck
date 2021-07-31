import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";

const AddFoodItemForm = () => {
    // const { pantryListId } = useParams();
    const history = useHistory();
    const { pantryListId } = useParams();


    const [foodItem, setFoodItem] = useState();

    const submitForm = (event) => {
        event.preventDefault();
        addFoodItem({
            categoryId: 1,
            // ^^ change for stretch goal
            pantryListId: pantryListId,
            name: "",
            quantity: "",
            notes: ""
        })
            .then(() => history.push(`/Pantry/${pantryListId}`));
    };

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" id="name" placeholder="Item Name"
                    onChange={setFoodItem(foodItem.name)} />
            </FormGroup>

            <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Quantity"
                    onChange={setFoodItem(foodItem.quantity)} />
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes:</Label>
                <Input type="textarea" name="notes" id="notes" placeholder="Notes"
                    onChange={setFoodItem(foodItem.Notes)} />
            </FormGroup>

            <FormGroup>
                <Button className="btn btn-primary">Add</Button>
            </FormGroup>
        </Form>
    );
};

export default AddFoodItemForm;