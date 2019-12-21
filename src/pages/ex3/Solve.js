import math from 'mathjs-expression-parser'
const inCrement = 0.00000000000000001;
const e = 0.000001;
const calculate = (express,x)=>{//如果该点没有值，则求临近点的值
    let result = math.eval(express, {x : x});
    console.log("接收表达式:",express,x,result);
    return isNaN(result)?calculate(express,x+inCrement):result;
};

const CompoundTrapezoid = (min,max,express)=>{

    console.log("接收表达式:",express);
    if (min>max) return NaN;
    express = express.replace('{','').replace('}','');//过滤kaTex语法的{}

    let n = 1;
    let tn;
    let t2n;

    tn = t2n = (max-min)*(calculate(express,min)+calculate(express,max))/2;
    do {
        tn = t2n;
        let h = (max-min)/n;
        let s = 0;
        for (let k = 0;k<n;k++)
            s+=calculate(express,min+(k+0.5)*h);
        t2n = tn/2+h/2*s;
        n*=2;
    }while (Math.abs(tn-t2n)>=e);
    return tn;
};

const rom = (min,max,express)=>{
    console.log("接收表达式:",express);
    if (min>max) return NaN;
    let T_pre = [];
    let T_cur = [];
    let n = 1;
    T_pre[0] = (max-min)*(calculate(express,min)+calculate(express,max))/2;
    while (true){
        T_cur = [];
        let h = (max-min)/n;
        let s = 0;
        for (let k = 0;k<n;k++)
            s+=calculate(express,min+(k+0.5)*h);
        T_cur[0] = T_pre[0]/2+h/2*s;
        for (let i = 1;i<=T_pre.length;i++){
            T_cur[i] = (Math.pow(4,i)*T_cur[i-1]-T_pre[i-1])/(Math.pow(4,i)-1);
            if (T_cur[i]-T_cur[i-1]<e){
                return T_cur[i];
            }
        }
        n*=2;
        T_pre = T_cur;
    }
};


export {
    CompoundTrapezoid,
    rom
}
