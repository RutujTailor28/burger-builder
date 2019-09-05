import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import './OrderSummary.css'
const orderSummary = (props) => {

    const ingredientSummary =  Object.keys(props.ingredients).map(igKey => {
        return(
            <li key={igKey}>
                <span className='orderSummary'>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Best Burger with follwing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );

}

export default orderSummary;