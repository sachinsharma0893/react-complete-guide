
import React, { Component } from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false
    }

    updatePurchasestate = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey]
            }).reduce((sum, element) => {
                return sum + element
            }, 0)
        this.setState({purchasable:sum>0})
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        let updatedCount = oldCount + 1
        let updatedIngredientObject = {
            ...this.state.ingredients
        }
        updatedIngredientObject[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredientObject
        })
        this.updatePurchasestate(updatedIngredientObject);
    }

    removeIngredientsHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        let updatedCount = oldCount - 1
        let updatedIngredientObject = {
            ...this.state.ingredients
        }
        updatedIngredientObject[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - INGREDIENT_PRICES[type]
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredientObject
        })
        this.updatePurchasestate(updatedIngredientObject);
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>

        );
    }
}

export default BurgerBuilder