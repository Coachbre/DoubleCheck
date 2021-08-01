import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { editFoodItem, getAllFoodItems } from "../modules/foodItemManager";

const EditFoodItemForm = () => {
    const { id, pantryListId } = useParams();
    const history = useHistory();

    const [foodItem, setFoodItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // initial state set to false

    const handleInputChange = (event) => {
        event.preventDefault();
        const changedFoodItem = { ...foodItem }

        let selectedValue = event.target.value
        changedFoodItem[event.target.id] = selectedValue

        setFoodItem(changedFoodItem)
    }

    const handleEdit = () => {
        const editedFoodItem = {
            categoryId: 1,
            pantryListId: pantryListId,
            id: id,
            name: foodItem.name,
            quantity: foodItem.quantity,
            notes: foodItem.notes
        }

        editFoodItem(editedFoodItem)
            .then(() => history.push(`/Pantry/${pantryListId}`));
    }

    useEffect(() => {
        getAllFoodItems(id).then(foodItem => {
            setFoodItem(foodItem)
            setIsLoading(false)
        })
    }, [])
    return (
        <>
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
            </Form>
        </>
    );
};
export default EditFoodItemForm;