import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const  INCREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0, 
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; 
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount; 
            const priceAddition = INCREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice; 
            const newPrice= oldPrice + priceAddition;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
    }

    // removeIngredientHandler = (type) {
        
    // }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                />
                    
            </>
        );
    }
}

export default BurgerBuilder; 