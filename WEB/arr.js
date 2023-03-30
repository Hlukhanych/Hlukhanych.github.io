// 1. Дано масив, який містить оцінки студента з К предметів. Знайти середній бал студента і
// з’ясувати до якої категорії він відноситься (відмінник (всі оцінки відмінно), двійочник (має хоча
// би одну двійку), хорошист (оцінки добре і відмінно), трійочник (є хоча би одна трійка)).

let arr = [5, 4, 4, 5, 3, 5];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum / arr.length);
let a = arr.every(item => {
    if(item === 5) {
        return true;
    }
});
if(a === true){
    console.log("Відмінник");
}
else if(arr.includes(2)){
    console.log("Двійочник");
}
else if(arr.includes(3)){
    console.log("Трійочник");
}
else{
    console.log("Хорошист");
}

// 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// • номери днів, протягом яких кількість відвідувачів була меншою за 20;
// • номери днів, коли кількість відвідувачів була мінімальною;
// • номери днів, коли кількість відвідувачів була максимальною;
// • загальну кількість клієнтів у робочі дні;
// • кількість клієнтів днів на вихідних.

let visitors = [25, 17, 21, 18, 30, 19, 20];

let day = [];
for(let i = 0; i < visitors.length; i++){
    if(visitors[i] < 20){
        day.push(i + 1);
    }
}
console.log("Номери днів, протягом яких кількість відвідувачів була меншою за 20: " + day);

let minVisitors = Math.min(...visitors);
let minVisitorsDays = [];
for (let i = 0; i < visitors.length; i++) {
  if (visitors[i] === minVisitors) {
    minVisitorsDays.push(i + 1);
  }
}
console.log("Дні з мінімальною кількістю відвідувачів: " + minVisitorsDays);

let maxVisitors = Math.max(...visitors);
let maxVisitorsDays = [];
for (let i = 0; i < visitors.length; i++) {
  if (visitors[i] === maxVisitors) {
    maxVisitorsDays.push(i + 1);
  }
}
console.log("Дні з максимальною кількістю відвідувачів: " + maxVisitorsDays);

var workingDaysVisitors = 0;
for(var i = 0; i < 5; i++){
    workingDaysVisitors += visitors[i];
}
console.log("Загальну кількість клієнтів у робочі дні: " + workingDaysVisitors);
console.log("Кількість клієнтів днів на вихідних: " + (visitors[5] + visitors[6]));

// 3. Дано масив імен студентів,. З’ясувати скільки разів зустрічається вказане користувачем ім’я,
// наприклад «Юрій».

var firstName = ["Анна", "Юрій", "Станіслав", "Олександр", "Андрій", "Юрій"];
var sum = 0;
for(var i = 0; i < firstName.length; i++){
    if(firstName[i] === "Юрій"){
        sum++;
    }
}
console.log(sum);

// 4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи
//     заповнюються випадковим чином значеннями від -500 до 500). Користувач вибирає номер
//     елементу, поки не відмовиться від подальшої гри, або не вибере всі елементи. Після кожного
//     ходу показувати сумарний виграш. Кожен елемент можна вибирати тільки 1 раз.

let totalWin = 0;
let prizeNumber = [];
let prizeArr = [];
for(let i = 0; i < 100; i++){
    prizeArr.push(Math.floor(Math.random() * 1000 - 500));
}
while (true){
    let number = prompt("Введіть номер ячейки до 100(exit якщо хочете вийти): ");
    if(number === "exit"){
        alert(`Загальний виграш = ${totalWin}`);
        break;
    }
    else{
        if(prizeNumber.indexOf(number) === -1){
            totalWin += prizeArr[Number(number)];
            prizeNumber.push(number);
        }
        else{
            alert("Ця ячейка вже була вибрана");
        }
        alert(`Загальний виграш = ${totalWin}`);
    }
}