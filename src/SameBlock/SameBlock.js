import React from 'react';
import './SomeBlock.css';

export default (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4){
        inputClasses.push('bold');
    }

    return (
        <div className='SomeBlock'>
            <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
            <input type='text' className={inputClasses.join(' ')} onChange={props.onChangeName} value={props.name}/>
            <button onClick={props.onDelete}>X</button>
        </div>
    )
}