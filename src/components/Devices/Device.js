import React from 'react';
import DeviceDetail from '../DeviceDeatail/DeviceDetail';

const Device = (props) => {
    // props.price = 15000;
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;