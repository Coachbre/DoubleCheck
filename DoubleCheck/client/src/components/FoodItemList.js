import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from 'reactstrap';
import FoodItemCard from './FoodItemCard';
import { getAllFoodItems, deleteFoodItem } from "../modules/foodItemManager";
import './styling/foodItemList.css';



const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState([]);

    const { pantryListId } = useParams();

    const getItems = () => {
        return getAllFoodItems(pantryListId).then((res) => setFoodItems(res));
    };

    const handleDelete = (foodItemId) => {
        deleteFoodItem(foodItemId).then(() => getItems())
        // ^^^ anonymous function [ () => getItems() ] isnt bound to an identifier (empty)
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>

            <body className="foodItemList">

                <div className="container">
                    <div className="listMenu">

                        <Link to={`${pantryListId}/NewItem`}>
                            <Button>Add Items!</Button>
                        </Link>

                        <Link to="/">
                            <Button>View All Sections</Button>
                        </Link>
                    </div>
                    <div className="row justify-content-center">
                        <table>
                            <tr>
                                {foodItems.map((foodItem) => {
                                    return (
                                        <FoodItemCard foodItem={foodItem} key={foodItem.id}
                                            pantryListId={pantryListId} key={pantryListId.id}
                                            handleDelete={handleDelete} />
                                        // ^ these are props, which allows fooditemcard.js file to access objects/functions
                                    )
                                }
                                )}
                            </tr>
                        </table>
                    </div>

                </div>
            </body>
        </>
    );
};

export default FoodItemList;