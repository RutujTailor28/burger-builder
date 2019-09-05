import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'
import '../../../container/BurgerBuilder/BurgerBuilder'
const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Total Price <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
           <BuildControl
               key={control.label}
               label={control.label}
               added={() => props.ingredientAdded(control.type)}
               removed={() => props.ingredientRemoved(control.type)}
               disabled={props.disableinfo[control.type]}
           />
        ))}
        <button className='OrderButton' onClick={props.ordered} disabled={!props.purchasable}> Order Now</button>
    </div>
);
export default buildControls;