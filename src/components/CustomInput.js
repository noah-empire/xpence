import React, {Component} from 'react';

class TextInput extends Component {
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
      {/*<h1>*/}
      {/*{this.props.name}<br/>*/}
      {/*{this.state.value}*/}
      {/*</h1>*/}
      <input type={this.props.type} value={this.state.value} className={'form-control'} onChange={this.handleChange} />
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
      {/*<h1>*/}
      {/*{this.props.name}<br/>*/}
      {/*{this.state.value}*/}
      {/*</h1>*/}
      <input type="number" step='0.01' placeholder='0.00' className={'form-control'} value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export { DollarInput, TextInput };
