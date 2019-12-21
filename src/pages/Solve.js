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

/*
//杜立特分解测试样例
2 10 0 -3
-3 -4 -12 13
1 2 3 -4
4 14 9 -13
*/
export {Guass,Doolittle}
