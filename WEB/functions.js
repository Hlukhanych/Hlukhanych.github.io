//Задача 7. Створити функцію, яка переводить сантиметри у дюйми;

//Декларативний спосіб
function Convertor(n){
    return n * 0.393701;
}
var n = Number(prompt("Введіть сантиметри: "));
alert(Convertor(n));

//За допомогою анонімної функції
var anonymConvert = function Convertor(n){
    return n * 0.393701;
}
var n = Number(prompt("Введіть сантиметри: "));
alert(anonymConvert(n));

//За допомогою стрілочної функції
let lambdaConvert = (n) => n * 0.393701;

//Задача 10. Створити функцію, яка для 4 чисел знаходять середнє арифметичне.

//Декларативний спосіб
function ArithmeticMean(a, b, c, d){
    return (a + b + c + d) / 4;
}
var a = Number(prompt("a = "));
var b = Number(prompt("b = "));
var c = Number(prompt("c = "));
var d = Number(prompt("d = "));
alert(ArithmeticMean(a, b, c, d));

//За допомогою анонімної функції
var anonymArithmeticMean = function(a, b, c, d){
    return (a + b + c + d) / 4;
}
var a = Number(prompt("a = "));
var b = Number(prompt("b = "));
var c = Number(prompt("c = "));
var d = Number(prompt("d = "));
alert(anonymArithmeticMean(a, b, c, d));

//За допомогою стрілочної функції
let lambdaArithmeticMean = (a, b, c, d) => (a + b + c + d) / 4;

//Задача 2. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей
//місяць.

//Декларативний спосіб
function Month(n){
    if(n === 1 || n === 2 || n === 12){
        return "Winter";
    }
    else if(2 < n < 6){
        return "Spring";
    }
    else if(5 < n < 9){
        return "Summer";
    }
    else if(8 < n < 12){
        return "Outumn";
    }
}
var n = Number(prompt("number of month = "));
alert(Month(n));

//За допомогою анонімної функції
var anonymMonth = function Month(n){
    if(n === 1 || n === 2 || n === 12){
        return "Winter";
    }
    else if(2 < n < 6){
        return "Spring";
    }
    else if(5 < n < 9){
        return "Summer";
    }
    else if(8 < n < 12){
        return "Outumn";
    }
}
var n = Number(prompt("number of month = "));
alert(anonymMonth(n));