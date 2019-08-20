import React from 'react';

const Welcome = (props) => {


    return (
        <div>
            <h1>Welcome {props.name}, you are currently {props.age} years old. </h1>
        </div>
    )
}
export default Welcome;