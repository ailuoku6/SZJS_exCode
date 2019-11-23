import React from 'react';
// import './../App.css';
import {L_nx,Newton} from "./Solve";
import { Input,Select,Button,Table,InputNumber } from 'antd';

const { Column, ColumnGroup } = Table;

const { TextArea } = Input;
const { Option } = Select;

class Ex2 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            zuobiao:{
                X:[0.56160,0.56280,0.56401,0.56521],
                Y:[0.82741,0.82659,0.82577,0.82495]
            },
            inputX:null,
            inputY:null,
            suanfa:'Lagrange',
            f_x:0.5635,
            result:null
        }
    }

    render() {
        let { zuobiao } = this.state;
        let dataSource = [];
        for (let i = 0;i<zuobiao.X.length;i++){
            let item = {};
            item.X = zuobiao.X[i];
            item.Y = zuobiao.Y[i];
            item.key = i;
            dataSource[dataSource.length] = item;
        }

        return(
            <div style={{marginLeft:20,marginRight:20}}>
                <div>
                    {/*<Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 50 }} scroll={{ y: 340 }} />*/}
                    <Table dataSource={dataSource}  pagination={{ pageSize: 50 }} scroll={{ y: 340 }}>

                        <Column title="X" dataIndex="X" key="X" />
                        <Column title="Y" dataIndex="Y" key="Y" />

                        <Column
                            title="操作"
                            key="action"
                            render={(text, record, index) => (
                                <span>
                                    <Button onClick={()=>{
                                        zuobiao.X.splice(index,1);
                                        zuobiao.Y.splice(index,1);
                                        this.setState({
                                            zuobiao:zuobiao
                                        });
                                        console.log(index)
                                    }}>删除</Button>
                                </span>
                            )}
                        />
                    </Table>
                </div>
                <div style={{marginTop:10}}>
                    <span>X:</span>
                    <InputNumber value={this.state.inputX} onChange={(value)=>{
                        this.setState({
                            inputX:value
                        })
                    }} />
                    <span>Y:</span>
                    <InputNumber value={this.state.inputY} onChange={(value)=>{
                        this.setState({
                            inputY:value
                        })
                    }} />
                    <Button onClick={()=>{
                        let {inputX,inputY} = this.state;
                        if (inputX==null||inputY==null){
                            alert("请输入数字");
                            return;
                        }
                        zuobiao.X.push(inputX);
                        zuobiao.Y.push(inputY);
                        this.setState({
                            zuobiao:zuobiao,
                            inputX:null,
                            inputY:null
                        })
                    }}>添加</Button>
                </div>

                <div style={{marginTop:10}}>
                    <span>选择解法:</span>
                    <Select defaultValue="Lagrange" style={{ width: 120 }} onChange={(value)=>{
                        this.setState({
                            suanfa:value
                        })
                    }}>
                        <Option value="Lagrange">Lagrange</Option>
                        <Option value="Newton">Newton</Option>
                    </Select>
                    <div style={{marginLeft:20,display:'inline-block'}}>
                        <span>欲求值的X:</span>
                        <InputNumber value={this.state.f_x} onChange={(value)=>{
                            this.setState({
                                f_x:value
                            })
                        }} />
                        <Button onClick={()=>{
                            if (this.state.f_x==null){
                                alert("请输入数字");
                                return;
                            }
                            let result;
                            if (this.state.suanfa==='Lagrange'){
                                result = L_nx(zuobiao.Y,zuobiao.X,this.state.f_x);
                            }else if (this.state.suanfa==='Newton'){
                                result = Newton(zuobiao.X,zuobiao.Y,this.state.f_x);
                            }
                            this.setState({
                                result:result
                            })
                        }}>确定</Button>
                    </div>
                    <div style={{marginLeft:20,display:'inline-block'}}>
                        {this.state.f_x&&this.state.result&&(
                            <span>{'当X='+this.state.f_x+'时，y的值为'+this.state.result}</span>
                        )}
                    </div>
                </div>
            </div>
        )
    }

}
export default Ex2;
