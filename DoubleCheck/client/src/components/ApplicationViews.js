// handles all page views
// added template views for now (tags and comments)

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import PantryList from "./PantryList";
import FoodItemList from "./FoodItemList";
import AddFoodItemForm from "./AddFoodItemForm";
import EditFoodItemForm from "./EditFoodItemForm";

export default function ApplicationViews({ isLoggedIn }) {
    return (
            //EXACT PATH is used when routes begin the same
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <PantryList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/:pantryListId(\d+)" exact>
                    {isLoggedIn ? <FoodItemList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/:pantryListId(\d+)/NewItem" exact>
                    {isLoggedIn ? <AddFoodItemForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/:pantryListId(\d+)/:foodItemId(\d+)/Update" exact>
                    {isLoggedIn ? <EditFoodItemForm /> : <Redirect to="/login" />}
                </Route>

                {/*<Route exact path="/tags/add">

                    {isLoggedIn  ? (
                        <TagForm />
                    ) : (
                        [isLoggedIn  ? <Hello /> : <Redirect to="/login" />]
                    )}
                </Route>
                
                // <Route path="/comment/GetByPostId/:postId(\d+)">
                //     {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
                // </Route>
                // <Route path="/comment/:postId(\d+)">
                //     <CommentAddForm />
                // </Route>
               */}

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>



              
            </Switch>
        </main>
    );
}