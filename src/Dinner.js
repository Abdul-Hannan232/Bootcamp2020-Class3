import React from 'react';

function Dinner (props) {
    return (
        <div>
            <h1> We are serving {props.dish} for {props.name} </h1>
            <h1> We are also serving {props.sweet}  </h1>
        </div>
    )
}

export default Dinner;