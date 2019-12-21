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

// const romGetValue = (min,max,express,T,i,j)=>{
//     if (T[i][j]!==undefined) return T[i][j];
//     if (i===0){
//         let n = Math.pow(2,j);
//         let h = (max-min)/n;
//         let s = 0;
//         for (let k = 0;k<n;k++)
//             s+=calculate(express,min+(k+0.5)*h);
//         T[i][j] = T[i][j-1]/2+h/2*s;
//     }else {
//         let left = T[i-1][j+1]===undefined?romGetValue(min,max,express,T,i-1,j+1):T[i-1][j+1];
//         let leftUp = T[i-1][j]===undefined?romGetValue(min,max,express,T,i-1,j):T[i-1][j];
//         T[i][j] = (Math.pow(4,i)*left-leftUp)/(Math.pow(4,i)-1);
//     }
//     return T[i][j];
// };
//
// const rom = (min,max,express)=>{
//     console.log("接收表达式:",express);
//     if (min>max) return NaN;
//     let T = [];
//     let i = 0;
//     T[i] = [];
//     T[i][0] = (max-min)*(calculate(express,min)+calculate(express,max))/2;
//     let e1 = e+1;
//     do {
//         if (T[i][0]===undefined){
//             romGetValue(min,max,express,T,i,0);
//         }
//         if (i>0&&T[i-1][1]===undefined){
//             romGetValue(min,max,express,T,i-1,1);
//         }
//         e1 = Math.abs(T[i][0]-(i>0?T[i-1][0]:0));
//         T[++i] = [];
//     }while (e1>=e);
//     console.log(T);
//     return T[i-1][0];
// };

const rom = (min,max,express)=>{
    console.log("接收表达式:",express);
    if (min>max) return NaN;
    let T_pre = [];
    let T_cur = [];
    let n = 1;
    T_pre[0] = (max-min)*(calculate(express,min)+calculate(express,max))/2;
    let e1 = e+1;
    do {
        T_cur = [];

        for (let i = 1;i<=T_pre.length;i++){

        }
    }while (e1>=e);
};

export {
    CompoundTrapezoid,
    rom
}
