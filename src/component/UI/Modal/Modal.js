import React from 'react';
import './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => (
    <Aux>
        <Backdrop showed={props.showed} clicked={props.modalClosed}/>
        <div className='Modal'
            style={{
                transform: props.showed ? 'translateY(0)' : 'translateY(-10)',
                opacity: props.showed ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;