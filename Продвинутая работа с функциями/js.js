//Итеративный способ: цикл for:

/* 

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result
}

console.log(pow(2,3) ); 

*/

//Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

function pow(x,n){
    if(n === 1) {
        return x;
    } else {
        return x * pow(x , n-1);
    }
}

console.log(pow(2,3))
