import React from 'react';
import './Button.css'
//Este tipo de archivo SIEMPRE LA PRIMERA EN MAYUS
function Button (props){

    function handleClick(){
        props.onClick(props.value);
    }
    return <button className= {`Button Button--${props.type}`}
    onClick={handleClick}>
    {props.value}
    </button>;
}
//Se le agrega los props


export default Button;