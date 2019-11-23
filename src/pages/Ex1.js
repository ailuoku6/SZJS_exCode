import React from 'react';
import './App.css';
import {Guass,Doolittle} from './Solve'
import { Input,Select,Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

class Ex1 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            juZhen:'2.5 2.3 -5.1 3.7\n 5.3 9.6 1.5 3.8\n 8.1 1.7 -4.3 5.5',
            result:'',
            suanfa:'Guass'
        }
    }

    onChange = ({ target: { value } }) => {
        this.setState({ juZhen:value });
    };

    // function handleChange(value) {
    //   console.log(`selected ${value}`);
    // }

    parseInput = ()=>{
        let result = [];
        let input = this.state.juZhen;

        if (input===''){
            alert("输入无效");
            return false;
        }
        let hang = input.split('\n');
        // console.log(hang);
        for (let i = 0;i<hang.length;i++){
            result[i] = hang[i].trim().split(new RegExp(/\s+/g));
            for (let j = 0;j<result[i].length;j++){
                result[i][j] = Number.parseFloat(result[i][j])
            }
        }
        console.log(result);
        // Guass(result);
        return result;
    };

    solve = ()=>{
        let Aug = this.parseInput();
        if (Aug === false) {
            alert("矩阵有误");
            return;
        }
        let x = [];
        let result = '';
        if (this.state.suanfa==='Guass'){
            x = Guass(Aug);
            for (let i = 0;i<x.length;i++){
                result = (result?result:'') + 'X'+(i+1).toString()+' = ' + x[i].toString() + '\n';
            }
        }else if (this.state.suanfa==='Doolittle'){
            let {L,U} = Doolittle(Aug);
            result += "L:\n";
            for (let i = 0;i<L.length;i++){
                for (let j = 0;j<L[i].length;j++)
                    result = result + L[i][j] + "   ";
                result+='\n';
            }
            result += "U:\n";
            for (let i = 0;i<U.length;i++){
                for (let j = 0;j<U[i].length;j++)
                    result = result + U[i][j] + "   ";
                result+='\n';
            }
        }

        this.setState({
            result:result
        })
    };

    render() {

        const { juZhen } = this.state;
        const{ result } = this.state;

        return(
            <div className={'App'}>
                <div className={"container"}>
                    <span className={"label"}>请输入增广矩阵</span>
                    <TextArea
                        className={"input"}
                        value={juZhen}
                        onChange={this.onChange}
                        placeholder="请输入矩阵，以空格和回车键分隔"
                        autoSize={ true }
                    />
                </div>
                <div className={"container"}>
                    <span className={"label"}>计算结果</span>
                    <TextArea
                        className={"input"}
                        value={result}
                        placeholder="计算结果"
                        autoSize={ true }
                        disabled={true}
                    />
                </div>

                <div className={"container"}>
                    <span className={"label"}></span>
                    <Select defaultValue={this.state.suanfa} style={{ width: 150 }} onChange={(value)=>{
                        this.setState({
                            suanfa:value
                        })
                    }}>
                        <Option value="Guass">Guass列主消元法</Option>
                        <Option value="Doolittle">Doolittle三角分解法</Option>
                    </Select>
                    <Button style={{marginLeft:20}} type="primary" onClick={()=>{
                        this.solve();
                    }}>计算</Button>
                </div>

            </div>
        )
    }

}
export default Ex1;
