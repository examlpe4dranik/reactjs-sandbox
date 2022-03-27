import React from 'react';
import './SomeBlock.css';

export default (props) => (
    <div className='SomeBlock'
         // style={{
         //     border: '1px solid #ccc',
         //     marginBottom: '10px',
         //     display: 'block',
         //     padding: '10px',
         //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
         //     borderRadius: '5px'
         // }}
    >
        <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>X</button>
    </div>
);