import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textOrientation: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    
    return (
        <>
          <h3>Your Order</h3>  
          <p>Your Burger Has The Following Ingredients</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
          <p>Checkout</p>
          <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
          <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </>
    );

};

export default orderSummary; 