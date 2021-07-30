import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodItemCard from './FoodItemCard';
import { getAllFoodItems } from "../modules/foodItemManager";

const FoodItemList = () => {

    const [foodItems, setFoodItems] = useState([]);

    const { pantryListId } = useParams();

    const getItems = () => {
        return getAllFoodItems(pantryListId).then((res) => setFoodItems(res));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (

        <div className="container">
            <div className="row justify-content-center">
                <table>
                    <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Notes</th>
                    </tr>
                    <tr>
                    {foodItems.map((foodItem) => {
                        return (

                            <FoodItemCard foodItem={foodItem} key={foodItem.id} />
                        )
                    }
                    )}
                    </tr>
                </table>
            </div>
        </div>

    );
};
export default FoodItemList;