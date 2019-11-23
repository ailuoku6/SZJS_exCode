const l_kx = (X,k,f_x)=>{//X为已知的x的数组，f_x为待求值得自变量
    let result = 1;

    for (let j = 0;j<X.length;j++)
        if (j!==k){
            result = result*((f_x-X[j])/(X[k]-X[j]))
        }
    return result;
};

const L_nx = (Y,X,f_x)=>{
    let result = 0;
    for (let k = 0;k<Y.length;k++)
        result += Y[k]*l_kx(X,k,f_x);

    return result;
};

const f = (x,y)=>{
    if (x.length===1) return y[0];
    if (x.length===2) return (y[1]-y[0])/(x[1]-x[0]);
    let x_left = [];
    let y_left = [];
    let x_right = [];
    let y_right = [];
    for (let i = 0;i<x.length-1;i++){
        x_left[x_left.length] = x[i];
        y_left[y_left.length] = y[i];
    }
    for (let i = 1;i<x.length;i++){
        x_right[x_right.length] = x[i];
        y_right[y_right.length] = y[i];
    }
    return (f(x_left,y_left)-f(x_right,y_right))/(x[0]-x[x.length-1]);
};

const Newton = (X,Y,f_x)=>{
    let result = 0;
    let x_list = [];
    let y_list = [];
    for (let i = 0;i<X.length;i++){
        let dataNode = 1;
        x_list[x_list.length] = X[i];
        y_list[y_list.length] = Y[i];
        dataNode*=f(x_list,y_list);
        for (let j = 0;j<i;j++){
            dataNode*=(f_x-X[j]);
        }
        result+=dataNode;
    }

    return result;
};

export {
    L_nx,
    Newton
}
