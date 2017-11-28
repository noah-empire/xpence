import { Component } from 'react';
// import XLSX from 'xlsx-style';


class SheetEditor extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: [],
  //     cols: []
  //   };
  //   this.handleFile = this.handleFile.bind(this);
  //   this.exportFile = this.exportFile.bind(this);
  // }
  //
  // handleFile(file){
  //   const reader = new FileReader();
  //
  //   reader.onload = (e) => {
  //     const bstr = e.target.result;
  //     const wb = XLSX.read(bstr, {type:'binary'});
  //     const wsname = wb.SheetNames[0];
  //     const ws = wb.Sheets[wsname];
  //     const data = XLSX.utils.sheet_to_json(ws, {header:1});
  //
  //     this.setState({ data: data, cols: make_cols(ws['!ref']) });
  //   };
  //   reader.readAsBinaryString();
  // };
}
