import React, { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";
import './styling/addAndEditItems.css';

const AddFoodItemForm = () => {
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);

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
            .then(() => history.push(`/${pantryListId}`));
    };


    return (
        <>
            <body className="addItemBody">
            <h3>Add an item!</h3>
            <Form>
                <FormGroup>
                    <Label for="name">What are you adding?</Label>
                    <Input type="text" name="name" id="name" placeholder="Item Name"
                        required value={foodItem.name}
                        onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="quantity">How many?</Label>
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
                    <Button className="btn btn-primary" onClick={handleSave} pantryListId={pantryListId}>Save</Button>
                </FormGroup>
                <Link to={`/${pantryListId}`}>
                    <Button>Cancel</Button>
                </Link>
            </Form>
        </body>
        </>
    );
};

export default AddFoodItemForm;