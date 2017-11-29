import React, { Component } from 'react';
import logo from './logo.svg';
import Row from './components/Row.js';
import SheetEditor from './components/SheetEditor.js';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {rows:[<Row key="0"/>]};
    this.addRow = this.addRow.bind(this);
  }

  addRow(ev){
    let index = (1 + this.state.rows.length).toString();
    let newState = this.state.rows.slice();
    newState.push(<Row key={index}/>);

    this.setState({rows: newState});

    console.log('ADD ROW!!!!', newState);
  }

  renderRows(rowData){
    console.log('RENDERING ROWS', rowData);
    return(
      <div>
      {rowData}
      </div>
    );
  }

  render() {
    return(
      <div id="container">
        <form>
        <table className={'table table-responsive'}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {this.renderRows(this.state.rows)}
          </tbody>
        </table>

      <button type="button" onClick={this.addRow}>
      Add row
      </button>
      </form>
      </div>
    );
  }
}

export default App;
