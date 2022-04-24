import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect(()=>{
        console.log(steps);
    } ,[steps])

    return (
        <div style={{backgroundColor: 'peru', margin: '10px', border: '5px solid purple', borderRadius: '10px'}}>
            <h2>This is my smart watch</h2>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Bhag ..........</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;