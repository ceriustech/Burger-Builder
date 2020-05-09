import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update!');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textOrientation: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });
        return (
        <>
          <h3>Your Order</h3>  
          <p>Your Burger Has The Following Ingredients</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
          <p>Checkout</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </>
        );
    }
} 

export default OrderSummary; 