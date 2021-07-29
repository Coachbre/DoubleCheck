import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pantry from './Pantry';
import { getAllPantries } from "../modules/tagManager";

const PantryList = () => {
    const [pantries, setPantries] = useState([]);
    // ^initially set to an empty array
    const getPantries = () => {
        getAllPantries().then(pantries => setPantries(pantries));
    };

    useEffect(() => {
        getPantries();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {pantries.map((pantry) => (
                    <Pantry pantry={pantry} key={pantry.id}

                        getPanties={getPantries} key={pantry.id} />
                    // ^ these are props, which allows the pantry.js file to access objects/functions
                ))}
            </div>
            {/* <Link to="/pantry/add">
                Create A New Pantry
            </Link> */}
        </div>
    );
};

export default PantryList;
//When the component loads, it will call the getAllTags function then
//set the state of the tag array and re-render to display a list of tag names.