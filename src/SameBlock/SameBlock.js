import React from 'react';

export default (props) => (
    <div>
        <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
    </div>
);