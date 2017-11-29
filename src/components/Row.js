import React, { Component } from 'react';
import { DollarInput, TextInput } from './CustomInput.js';

class Row extends Component{
  constructor(props){
    super(props);
    this.state = {
      date:'',
      descOfExpense:'',
      amount:''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    this.setState({
      date:ev.target.date,
      descOfExpense:ev.target.descOfExpense,
      amount:ev.target.amount
    });
  }
  render(){
    return(
      <tr className={'data-row'}>
        <td><TextInput type={'date'} name='Date' /></td>
        <td><TextInput type={'text'} name='Description of expenses' /></td>
        <td><DollarInput name='Amount (CAD$)' /></td>
        <td></td>
      </tr>
    );
  }
}

export default Row;
