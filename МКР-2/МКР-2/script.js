// Використовуючи JS, HTML та СSS створити:
//     • Об’єкт для зберігання даних про фільм (Id, назва, режисер, URL-трейлеру, рік
// випуску, касові збори).
// • На основі об’єкту фільму створити новий об’єкт, який перевизначає метод
// toString().
// • Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт повинен містити
// конструктор та метод для додавання даних про новий фільм (перед додаванням
// забезпечити перевірку на відсутність дублікатів) .
// • Відобразити форму для додавання фільму на сторінці.

class Film {
    constructor(id, name, director, URL, year, price){
        this.id = id;
        this.name = name;
        this.director = director;
        this.URL = URL;
        this.year = year;
        this.price = price;
    }
}

class StringifyFilm extends Film {
    toString() {
        return `${super.toString()}{
            id: ${this.id},
            name: ${this.name},
            director: ${this.director},
            URL: ${this.URL},
            year: ${this.year},
            price: ${this.price}
        }`;
    }
}

class FilmsCollection {
    constructor() {
        this.item = [];
    }

    add(film) {

        if(!(film instanceof Film)) {
            throw "${film} if not instance of Film";
        }

        for(let i = 0; i < this.item.length; i++) {
            if(this.item[i].id === film.id) {
                alert("This film in collection");
                throw "This film in collection";
            }
        }

        this.item.push(film);
        alert("Успішно");
    }
}

let filmsCollection = new FilmsCollection();

function addBtn() {
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#film_name").value;
    let director = document.querySelector("#director").value;
    let URL = document.querySelector("#URL").value;
    let year = document.querySelector("#year").value;
    let price = document.querySelector("#price").value;

    let film = new Film(id, name, director, URL, year, price);

    filmsCollection.add(film);
}