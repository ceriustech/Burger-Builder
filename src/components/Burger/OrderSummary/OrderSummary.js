import React from 'react'; 

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
          <p>Checkout</p>
        </>
    );

};

export default orderSummary; 