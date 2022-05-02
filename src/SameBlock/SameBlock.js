import React from 'react';
import Radium from 'radium';
import './SomeBlock.scss';

class SameBlock extends React.Component {
    render() {
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4){
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
                <div>{this.props.number}: <strong>{this.props.name}</strong> {this.props.message}</div>
                <input type='text' className={inputClasses.join(' ')} onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>X</button>
            </div>
        )
    }
}

export default Radium(SameBlock)