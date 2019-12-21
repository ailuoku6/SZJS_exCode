import React from 'react';
// import './../App.css';
import { Input,Select,Button,Table,InputNumber } from 'antd';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import {CompoundTrapezoid,rom} from './Solve'

const { Column, ColumnGroup } = Table;

const { TextArea } = Input;
const { Option } = Select;


class Ex3 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            min:0,
            max:1,
            express:'sin(x)/x',
            independentVar:'x',
            suanfa:'1',
            result:''
        }
    }

    render() {

        let {min,max,express,independentVar} = this.state;
        // console.log(CompoundTrapezoid(min,max,express));

        let xianshi = '\\int_{'+(min===null?'0':min.toString())+'}^{'+(max===null?'0':max.toString())+'} '+express+' d'+independentVar;
        console.log(xianshi);
        return (
            <div>
                <label>积分下限</label>
                <InputNumber value={min} onChange={(value)=>{
                    this.setState({
                        min:value,
                        result:''
                    })
                }} />
                <br/>
                <label>积分上限</label>
                <InputNumber value={max} onChange={(value)=>{
                    this.setState({
                        max:value,
                        result:''
                    })
                }} />
                <br/>
                <label>被积函数</label>
                <Input value={express} onChange={({ target: { value } })=>{
                    this.setState({
                        express:value,
                        result:''
                    })
                }} />
                <br/>
                <InlineMath ref="input">{xianshi}</InlineMath>{this.state.result!==''&&(<span>{'='+this.state.result}</span>)}
                <br/>
                <Select defaultValue="1" style={{ width: 120 }} onChange={(value)=>{
                    this.setState({
                        suanfa:value,
                        result:''
                    })
                }}>
                    <Option value="1">变步长梯形法</Option>
                    <Option value="2">龙贝格法</Option>
                </Select>
                <Button onClick={()=>{
                    // let result = CompoundTrapezoid(min,max,express);
                    let result = this.state.suanfa==='1'?CompoundTrapezoid(min,max,express):rom(min,max,express);

                    this.setState({
                        result:result
                    })
                }}>计算结果</Button>
            </div>
        )
    }

}
export default Ex3;
