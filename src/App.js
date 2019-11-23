import React from 'react';
// import './App.css';
// import {Guass,Doolittle} from './Solve'
// import { Input,Select,Button } from 'antd';

// const { TextArea } = Input;
// const { Option } = Select;
import Router from './route/router'

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      // juZhen:'',
      // result:'',
      // suanfa:'Guass'
    }
  }

  // onChange = ({ target: { value } }) => {
  //   this.setState({ juZhen:value });
  // };
  //
  // // function handleChange(value) {
  // //   console.log(`selected ${value}`);
  // // }
  //
  // parseInput = ()=>{
  //   let result = [];
  //   let input = this.state.juZhen;
  //
  //   if (input===''){
  //     alert("输入无效");
  //     return false;
  //   }
  //   let hang = input.split('\n');
  //   // console.log(hang);
  //   for (let i = 0;i<hang.length;i++){
  //     result[i] = hang[i].trim().split(new RegExp(/\s+/g));
  //     for (let j = 0;j<result[i].length;j++){
  //       result[i][j] = Number.parseFloat(result[i][j])
  //     }
  //   }
  //   console.log(result);
  //   // Guass(result);
  //   return result;
  // };
  //
  // solve = ()=>{
  //   let Aug = this.parseInput();
  //   if (Aug === false) {
  //     alert("矩阵有误");
  //     return;
  //   }
  //   let x = [];
  //   let result = '';
  //   if (this.state.suanfa==='Guass'){
  //     x = Guass(Aug);
  //     for (let i = 0;i<x.length;i++){
  //       result = (result?result:'') + 'X'+(i+1).toString()+' = ' + x[i].toString() + '\n';
  //     }
  //   }else if (this.state.suanfa==='Doolittle'){
  //     let {L,U} = Doolittle(Aug);
  //     result += "L:\n";
  //     for (let i = 0;i<L.length;i++){
  //       for (let j = 0;j<L[i].length;j++)
  //         result = result + L[i][j] + "   ";
  //       result+='\n';
  //     }
  //     result += "U:\n";
  //     for (let i = 0;i<U.length;i++){
  //       for (let j = 0;j<U[i].length;j++)
  //         result = result + U[i][j] + "   ";
  //       result+='\n';
  //     }
  //   }
  //
  //   this.setState({
  //     result:result
  //   })
  // };

  render() {

    // const { juZhen } = this.state;
    // const{ result } = this.state;

    return(
        <Router/>
    )
  }

}
export default App;
