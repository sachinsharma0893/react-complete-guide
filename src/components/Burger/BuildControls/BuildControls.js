import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> Current Price: <strong>{props.totalPrice.toFixed(2)} </strong></p>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    ingredientsAdded={() => props.ingredientsAdded(control.type)}
                    removeIngredients={() => props.removeIngredients(control.type)}
                    disabled={props.disabledInfo[control.type]}
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
        </div>
    );
}

export default buildControls;