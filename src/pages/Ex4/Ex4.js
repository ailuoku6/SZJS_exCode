import React from 'react';
// import './../App.css';
import { Input,Select,Button,Table,InputNumber } from 'antd';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import {euler,logeKuta} from './Solve'

const { Column, ColumnGroup } = Table;

const { TextArea } = Input;
const { Option } = Select;


class Ex4 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            a:0,
            b:5,
            express:'-x*y*y',
            y0:2,
            h:0.25,
            suanfa:'1',
            result:[]
        }
    }

    render() {

        // console.log(euler(0,5,'-x*y*y',2,0.25));
        let {a,b,express,y0,h,result} = this.state;

        let dataSource = [];
        if (result[0]&&result[1]){
            for (let i = 0;i<result[0].length;i++){
                let item = {};
                item.X = result[0][i];
                item.Y = result[1][i];
                item.key = i;
                dataSource[dataSource.length] = item;
            }
        }

        return (
            <div>
                <label>起始点</label>
                <InputNumber value={a} onChange={(value)=>{
                    this.setState({
                        a:value,
                        result:[]
                    })
                }} />
                <br/>
                <label>结束点</label>
                <InputNumber value={b} onChange={(value)=>{
                    this.setState({
                        b:value,
                        result:[]
                    })
                }} />
                <br/>
                <label>初始值</label>
                <InputNumber value={y0} onChange={(value)=>{
                    this.setState({
                        y0:value,
                        result:[]
                    })
                }} />
                <br/>
                <label>步长</label>
                <InputNumber value={h} onChange={(value)=>{
                    this.setState({
                        h:value,
                        result:[]
                    })
                }} />
                <br/>
                <label>y'=</label>
                <Input style={{width:200}} value={express} onChange={({ target: { value } })=>{
                    this.setState({
                        express:value,
                        result:[]
                    })
                }} />
                <br/>
                <Select defaultValue="1" style={{ width: 120 }} onChange={(value)=>{
                    this.setState({
                        suanfa:value,
                        result:[]
                    })
                }}>
                    <Option value="1">改进欧拉法</Option>
                    <Option value="2">四阶龙格-库塔法</Option>
                </Select>
                <Button onClick={()=>{
                    let result = this.state.suanfa==='1'?euler(a,b,express,y0,h):logeKuta(a,b,express,y0,h);
                    console.log(result);
                    this.setState({
                        result:result
                    })
                }}>计算结果</Button>
                <Table dataSource={dataSource}  pagination={{ pageSize: 50 }} scroll={{ y: 340 }}>

                    <Column title="X" dataIndex="X" key="X" />
                    <Column title="Y" dataIndex="Y" key="Y" />

                </Table>
            </div>
        )
    }

}
export default Ex4;
