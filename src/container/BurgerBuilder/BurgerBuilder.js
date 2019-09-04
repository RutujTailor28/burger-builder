import React,{Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredient :{
            salad:2,
            bacon:2,
            cheese:1,
            meat:1
        }
    };
    render() {
        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredient}/>
                </div>
                <div><BuildControls/></div>
            </Aux>
        );
    }
}

export default BurgerBuilder;