import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import FoodItemCard from './FoodItemCard';
import { getAllFoodItems } from "../modules/foodItemManager";

const FoodItemList = () => {

    const [foodItems, setFoodItems] = useState([]);

    const { PantryListId } = useParams();

    const getItems = () => {
        getAllFoodItems(PantryListId).then(setFoodItems);
        console.log(foodItems);
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {foodItems.map((foodItem) => {
                        return (
                            <FoodItemCard foodItem={foodItem} key={foodItem.id} />
                        )
                    }
                    )}
                </div>
            </div>
        </>
    );
};
export default FoodItemList;