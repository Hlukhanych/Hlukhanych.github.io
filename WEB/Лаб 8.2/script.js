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
    if(!(user instanceof TournamentUser))
      throw '${user} is not instance of TournamentUser';
    this.item.push(user);
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
  }
  
  delete(id){
    let userIndex = this.item.findIndex(user => user.code == id);
    if(userIndex == -1)
      throw "Not found";
    this.item.splice(userIndex, 1);
  }

  getByPrice(price){
    return this.item.filter(user => Number(user.price) <= price);
  }

  getByNom(fNom, sNom, tNom){
    return this.item.filter(user => Number(user.firstNom) + Number(user.secondNom) + Number(user.thirdNom) >= Number(fNom) + Number(sNom) + Number(tNom));
  }
}

let firsrUser = new ProjectUser("Stas", "1000", "5", "3", "3");
let secondUser = new ProjectUser("Andriy", "4500", "5", "3", "5");
let projectUsers = new ProjectUsers();

ProjectUsers.add(firsrUser);
ProjectUsers.add(secondUser);
ProjectUsers.getByPrice("300");
ProjectUsers.getByNom("2", "3", "4");