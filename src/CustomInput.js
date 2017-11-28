import React, {Component} from 'react';

class TextInput extends Component{
  constructor(props){
    super(props);
    this.state={value:''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    this.setState({
      value:ev.target.value,
    });
  }
  render(){
    return(
      <div>
      <h1>
      {this.props.name}<br/>
      {this.state.value}
      </h1>

      <label>
      {this.props.name}
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      </div>
    );
  }
}

class DollarInput extends Component{
  constructor(props){
    super(props);
    this.state={value:''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    this.setState({
      value:ev.target.value,
    });
  }
  render(){
    return(
      <div>
      <h1>
      {this.props.name}<br/>
      {this.state.value}
      </h1>

      <label>
      {this.props.name}
      <input type="number" step='0.01' value='0.00' placeholder='0.00' value={this.state.value} onChange={this.handleChange} />
      </label>
      </div>
    );
  }
}

export { DollarInput, TextInput };
