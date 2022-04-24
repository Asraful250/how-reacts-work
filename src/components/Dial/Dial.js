import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '10px solid brown', margin: '20px'}}>
            <h3>This is Dial</h3>
            <p>Steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;