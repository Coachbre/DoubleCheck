import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "reactstrap";
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
            <Link to={`${pantryListId}/NewItem`}>
                <Button>Add Item</Button>
            </Link>
            <div className="row justify-content-center">
                <table>
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