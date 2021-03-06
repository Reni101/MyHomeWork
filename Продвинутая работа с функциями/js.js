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

/* function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3)) */

/* 
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }

}

console.log(sumSalaries(company));
 */

/* function sumTo(n) {
    let x = 0;
    for (let i = 1; i <= n; i++) {
        x += i;
    } return x;
} */

/* function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    };
}

console.log(sumTo(100));

 */

/* 
function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1);
    };
}
console.log(factorial(3)) */

/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

 function printList(list) {
    let x = list;
    while (x) {
        console.log(x.value);
        x = x.next;
    }

}

printList(list); 

function printList(x){
    console.log(x.value);
    if(x.next) {
        printList(x.next);
    }
}

printList(list);

*/
/* 
function sumAll(...args) {
    let sum = 0;
    for(let arg of args) {
        sum +=arg;
    }
    return sum;
}

console.log(sumAll(3,3,3,3,));


function showName(firstName, lastName, ...titles){
    console.log(firstName +" " + lastName);
    console.log(titles)
};

showName("Юлий", "Цезарь", "Консул", "Император"); */

console.log(Math.max(3, 5, 6))
