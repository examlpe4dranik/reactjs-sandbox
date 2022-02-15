import React from 'react';

export default (props) => (
    <div>
        <div>{props.number}: {props.message}</div>
        {props.children}
    </div>
);