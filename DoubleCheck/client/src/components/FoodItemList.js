import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CardBody, Card } from "reactstrap";
import FoodItemCard from './FoodItemCard';
import { getAllFoodItems } from "../modules/foodItemManager";

const FoodItemList = () => {

    const [items, setItems] = useState([]);

    const getItems = () => {
        getAllFoodItems().then(items => setItems(items));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {items.map((foodItem) => {
                    return (
                        <Card>
                            <CardBody>
                                <FoodItemCard foodItem={foodItem} key={foodItem.id} />
                            </CardBody>
                            {/* <Button onClick={editSelectedFoodItem}>Update</Button> */}
                            {/* <Button onClick={deleteSelectedFoodItem}>Delete</Button> */}
                        </Card>
                    )
                } )}
            </div>
        </div>
    );
};
export default FoodItemList;