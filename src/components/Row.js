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
      <div>
      <TextInput name='Date' />

      <TextInput name='Description of expenses' />

      <DollarInput name='Amount (CAD$)' />

      </div>
    );
  }
}

export default Row;
