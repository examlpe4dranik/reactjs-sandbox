import React from 'react';

export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px',
        margin: '20px'
    }}>
        <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>X</button>
    </div>
);