// Описати клас для створення об'єктів згідно з варіантом. 
// Описати клас для для створення відповідної колекції обєктів. Реалізувати методи:
// • отримання інформації щодо одного об’єкту (за Кодом),
// • отримання вибірки з колекції згідно з вказаними запитами.
// • додавання одного об’єкту,
// • додавання колекції об’єктів,
// • редагування інформації  про вказаний об’єкт.
// • видалення інформації про вказаний об’єкт.
// 5. Об’єкт “Проект” (Код, автор проекту,
//     кошторис проекту у грн., оцінки проекту у трьох номінаціях (цілі числа
//     від 1 до 5). Запит проектів, кошторис яких не більше У грн., які у трьох
//     номінаціях у сумі набрали не менше, ніж Х балів.

let count = 0;
class ProjectUser{

  constructor(name, price, firstNom, secondNom, thirdNom){
    this.code = count++;
    this.name = name;
    this.price = price;
    this.firstNom = firstNom;
    this.secondNom = secondNom;
    this.thirdNom = thirdNom;
  }

}
class ProjectUsers{
  constructor(){
    this.item = [];
  }

  add(user){
    if(!(user instanceof ProjectUser))
      throw '${user} is not instance of TournamentUser';
    this.item.push(user);
    alert("Успішно");
  }

  getById(id){
    return this.item.find(user => user.code == id)
  }

  update(id, newUser){
    let user = this.getById(id);
    if(!user)
      throw "Not found";
    for(let k of ["name", "price", "firstNom", "secondNom", "thirdNom"]){
      if (newUser[k])
        user[k] = newUser[k];
    }
    alert("Змінено");
  }
  
  delete(id){
    let userIndex = this.item.findIndex(user => user.code == id);
    if(userIndex == -1)
      throw "Not found";
    this.item.splice(userIndex, 1);
  }

  deleteByName(name){
    let userIndex = this.item.findIndex(user => user.name == name);
    if(userIndex == -1)
      throw "Not found";
    this.item.splice(userIndex, 1);
    alert("Успішно");
  }

  getByPrice(price){
    return this.item.filter(user => Number(user.price) <= price);
  }

  getByNom(fNom, sNom, tNom){
    return this.item.filter(user => Number(user.firstNom) + Number(user.secondNom) + Number(user.thirdNom) >= Number(fNom) + Number(sNom) + Number(tNom));
  }
}

//let firstUser = new ProjectUser("Stas", "1000", "5", "3", "3");
//let secondUser = new ProjectUser("Andriy", "4500", "5", "3", "5");
let projectUsers = new ProjectUsers();

//projectUsers.add(firstUser);
//projectUsers.add(secondUser);
//projectUsers.getByPrice("3000");
//projectUsers.getByNom("2", "3", "4");

function addBtn(){
  let name = document.querySelector("#user_name").value;
  let price = document.querySelector("#project_price").value;
  let fN = document.querySelector("#firs_number").value;
  let sN = document.querySelector("#second_number").value;
  let tN = document.querySelector("#third_number").value;

  let person = new ProjectUser(name, price, fN, sN, tN);

  projectUsers.add(person);
}

function deleteBtn(){
  let name = document.querySelector("#delete_name").value;

  projectUsers.deleteByName(name);
}

function changeBtn(){
  let ID = document.querySelector("#user_ID").value;
  let name = document.querySelector("#change_name").value;
  let price = document.querySelector("#change_price").value;
  let fN = document.querySelector("#change_fN").value;
  let sN = document.querySelector("#change_sN").value;
  let tN = document.querySelector("#change_tN").value;

  let newUser = new ProjectUser(name, price, fN, sN, tN);

  projectUsers.update(ID, newUser);
}