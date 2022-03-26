import React from 'react';

export default (props) => (
    <div>
        <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
        <button onClick={props.onChangeTitle}>Change title</button>
    </div>
);