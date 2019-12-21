import math from 'mathjs-expression-parser'
const inCrement = 0.00000000000000001;
const calculate = (express,x,y)=>{//如果该点没有值，则求临近点的值
    let result = math.eval(express,{x:x,y:y});
    // console.log("接收表达式:",express,x,result);
    return isNaN(result)?calculate(express,x+inCrement,y):result;
};

const euler = (a,b,express,y0,h)=>{//区间[a,b],express表达式,初值y0,步长h
    let result = [];
    result[0] = [];//x列表
    result[1] = [];//y列表
    result[0][0] = a;
    result[1][0] = y0;
    let i = 1;
    let cur = a+i*h;
    while (cur<=b){
        let y;
        y = result[1][i-1]+h*calculate(express,cur-h,result[1][i-1]);
        y = result[1][i - 1] + h / 2 * (calculate(express,cur - h,result[1][i - 1]) + calculate(express,cur,y)) ;
        result[0].push(cur);
        result[1].push(y);
        i++;
        cur += h;
    }
    return result;
};

const logeKuta = (a,b,express,y0,h)=>{//区间[a,b],express表达式,初值y0,步长h
    let result = [];
    result[0] = [];//x列表
    result[1] = [];//y列表
    result[0][0] = a;
    result[1][0] = y0;
    let i = 1;
    let cur = a+i*h;
    while (cur<=b){
        let y,k1,k2,k3,k4;
        k1 = calculate(express,cur-h,result[1][i-1]);
        k2 = calculate(express,cur-h+h/2,result[1][i-1]+h/2*k1);
        k3 = calculate(express,cur-h+h/2,result[1][i-1]+h/2*k2);
        k4 = calculate(express,cur,result[1][i-1]+h*k3);
        y = result[1][i-1]+h/6*(k1+2*k2+2*k3+k4);
        result[0].push(cur);
        result[1].push(y);
        i++;
        cur += h;
    }
    return result;
};

export {
    euler,
    logeKuta
}
