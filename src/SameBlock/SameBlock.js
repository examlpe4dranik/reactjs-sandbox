import React from 'react';
import Radium from 'radium';
import './SomeBlock.css';

const someBlock = (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4){
        inputClasses.push('bold');
    }

    const focusStyle = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        borderRadius: '5px',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            transition: 'border, box-shadow .3s',
            cursor: 'pointer'
        }
    }

    return (
        <div className='SomeBlock' style={focusStyle}>
            <div>{props.number}: <strong>{props.name}</strong> {props.message}</div>
            <input type='text' className={inputClasses.join(' ')} onChange={props.onChangeName} value={props.name}/>
            <button onClick={props.onDelete}>X</button>
        </div>
    )
}

export default Radium(someBlock)