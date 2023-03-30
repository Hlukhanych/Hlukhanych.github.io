//Завдання 2. Створити функцію яка приймає назву або номер місяця, та повертає пору року до
//якої він належить.

function Month(n){
    if(n == 1 || n =="Січень" || n == 2 || n =="Лютий" || n == 12 || n =="Грудень"){
        return "Winter";
    }
    else if(n == 3 || n == "Березень" || n == 4 || n == "Квітень" || n == 5 || n == "Травень"){
        return "Spring";
    }
    else if(n == 6 || n == "Червень" || n == 7 || n == "Липень" || n == 8 || n == "Серпень"){
        return "Summer";
    }
    else if(n == 9 || n == "Вересень" || n == 10 || n == "Жовтень" || n == 11 || n == "Листопад"){
        return "Outumn";
    }
}
var n = prompt("Введіть номер або назву місяця");
console.log(Month(n));

//Додатковий спосіб
let anonymMonth = function Month(n){
    if(n == 1 || n =="Січень" || n == 2 || n =="Лютий" || n == 12 || n =="Грудень"){
        return "Winter";
    }
    else if(n == 3 || n == "Березень" || n == 4 || n == "Квітень" || n == 5 || n == "Травень"){
        return "Spring";
    }
    else if(n == 6 || n == "Червень" || n == 7 || n == "Липень" || n == 8 || n == "Серпень"){
        return "Summer";
    }
    else if(n == 9 || n == "Вересень" || n == 10 || n == "Жовтень" || n == 11 || n == "Листопад"){
        return "Outumn";
    }
}
var n = prompt("Введіть номер або назву місяця");
console.log(anonymMonth(n));

// Завдання 3. Дано одновимірний масив завдовжки n. Розділити його на дві частини так, щоб в
// одній частині були додатні елементи, а в іншій частині були від’ємні елементи.

let arr = [23, 5, -2, 4, -1, 73, 18, -16];

let positive = [];
let negatie = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        negatie.push(arr[i]);
    }
    else{
        positive.push(arr[i]);
    }
}
console.log("positive = " + positive);
console.log("negative = " + negatie);