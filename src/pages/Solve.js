const Guass = (Aug)=>{//参数是待解增广矩阵
    let i,i1,j,k,maxele,Temp,l;
    let n = Aug.length;//n为未知数个数
    for (i1 = 0; i1 < n-1; i1++){
        maxele = Math.abs(Aug[i1][i1]);
        k = i1;
        for (i = i1;i<n;i++)
            if (maxele < Math.abs(Aug[i1][i]))
                k = i1;
        for (j = 0;j<n+1;j++){
            Temp = Aug[i1][j];
            Aug[i1][j] = Aug[k][j];
            Aug[k][j] = Temp;
        }
        for (k = i1+1;k<n;k++){
            l = Aug[k][i1] / Aug[i1][i1];
            for (j = i1;j<n+1;j++)
                Aug[k][j] = Aug[k][j] - l*Aug[i1][j];
        }
    }

    let s;
    let x = [];
    x[n-1] = Aug[n-1][n] / Aug[n-1][n-1];
    for (i = n-2;i>=0;i--){
        s = 0;
        for (j = i+1;j<n;j++)
            s = s+Aug[i][j]*x[j];
        x[i] = (Aug[i][n] - s)/Aug[i][i];
    }
    console.log(x);
    return x;
};

// const Multiply = (x,y)=>{
//     return x===Infinity||y===Infinity?0:x*y;
// };
//
// const JZMultiply = (L,U,i,j)=>{//L的第i行乘U的第j列
//     let he = 0;
//     for (let k = 0;k<L.length&&k<U.length;k++)
//         he+=Multiply(L[i][k],U[k][j]);
//     return he;
// };

// const Doolittle = (Aug)=>{
//     let n = Aug.length;
//     let L = new Array(n);
//     let U = new Array(n);
//     for (let i = 0;i<n;i++){//对L、U进行初始化
//         L[i] = new Array(n);
//         U[i] = new Array(n);
//         for (let j = 0;j<n;j++){
//             if (j>i){
//                 L[i][j] = 0;
//                 U[i][j] = Infinity;
//             }else if (i===j){
//                 L[i][j] = 1;
//                 U[i][j] = Infinity;
//             }else {
//                 U[i][j] = 0;
//                 L[i][j] = Infinity;
//             }
//         }
//     }
//
//     let l_xy = 0;//L的待求列号、U的待求行号
//     // let u_xy = 0;//U的待求行号
//     while (l_xy<n){
//
//         for (let i = l_xy;i<n;i++){//解U的第l_xy行,i是U的列号
//             U[l_xy][i] = Aug[l_xy][i]-JZMultiply(L,U,l_xy,i);//这里的U[l_xy][i]的正负号需要判断
//             if (Aug[l_xy][i]!==JZMultiply(L,U,l_xy,i)) U[l_xy][i] = -U[l_xy][i];
//         }
//
//         for (let i = l_xy+1;i<n;i++){//i是L的行号
//             L[i][l_xy] = Aug[i][l_xy] - JZMultiply(L,U,i,l_xy);//这里的L[i][l_xy]的正负号需要判断
//             if (Aug[i][l_xy] !== JZMultiply(L,U,i,l_xy)) L[i][l_xy] = -L[i][l_xy];
//         }
//         l_xy++;
//     }
//
//     console.log("L",L);
//     console.log("U",U);
//
//     return {L:L,U:U}
// };

const Doolittle = (Aug)=>{
    let n = Aug.length;
    let L = new Array(n);
    let U = new Array(n);
    //初始化L、U
    for (let i = 0;i<n;i++){
        L[i] = new Array(n);
        U[i] = new Array(n);
        for (let j = 0;j<n;j++){
            L[i][j] = 0;
            U[i][j] = 0;
            if (i===j) L[i][j] = 1;
        }
    }

    for (let j = 0;j<n;j++)
        U[0][j] = Aug[0][j];
    for (let i = 1;i<n;i++)
        L[i][0] = Aug[i][0]/U[0][0];

    for (let r = 1;r<n;r++){
        for (let j = r;j<n;j++){
            U[r][j] = Aug[r][j];
            for (let k = 0;k<r;k++)
                U[r][j] -= (L[r][k]*U[k][j]);
        }
        for (let i = r+1;i<n;i++){
            L[i][r] = Aug[i][r];
            for (let k = 0;k<r;k++)
                L[i][r] -= (L[i][k]*U[k][r]);
            L[i][r] /= U[r][r];
        }
    }

    return {L:L,U:U}
};

export {Guass,Doolittle}
