import React from 'react'
import Aux from "../../hoc/Auxiliary";
import  './Layout.css'
const layout = props => (
    <Aux>
        <div>Toolbar,Side drawer,Back drawer</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;