import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addFoodItem } from "../modules/foodItemManager";

onst FoodItemForm = () => {
    const emptyFoodItem = {
        name: '',
        
    };