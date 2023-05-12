//Зав 1
function Accounting(code, fullName, position, salary, numberOfChildren, lengthOfService){
    this.code = code;
    this.fullName = fullName;
    this.position = position;
    this.salary = salary;
    this.numberOfChildren = numberOfChildren;
    this.lengthOfService = lengthOfService;

    this.getPerson = function (){
        return `Code: ${this.code} \nFull name: ${this.fullName} \nPosition: ${this.position} \nSalary: ${this.salary} \nNumber of children: ${this.numberOfChildren} \nLength of service: ${this.lengthOfService}`;
    }
}

let persone1 = new Accounting(13, "Перманентний Владислав Борисович", "Керівник", 22000, 2, 4);
let persone2 = new Accounting(14, "Гравірований Ярослав Вікторович", "Заступник", 19000, 0, 3);

alert(persone1.getPerson());

//Зав 2
function DAI(code, fullName, brand, carNumber, color){
    this.code = code;
    this.fullName = fullName;
    this.brand = brand;
    this.carNumber = carNumber;
    this.color = color;

    this.getPerson = function (){
        return `Code: ${this.code} \nFull name: ${this.fullName} \nBrand: ${this.brand} \nCar number: ${this.carNumber} \nColor: ${this.color}`;
    }
}

let persone3 = new DAI(13, "Перманентний Владислав Борисович", "BMW", "АО 2343 ВМ", "black");
let persone4 = new DAI(14, "Гравірований Ярослав Вікторович", "Honda", "Ао 6547 ВР", "silver");

alert(persone3.getPerson());

//Зав 3
function Enterprise(code, enterpriseName, numberOfEmployees, industry, adress){
    this.code = code;
    this.enterpriseName = enterpriseName;
    this.numberOfEmployees = numberOfEmployees;
    this.industry = industry;
    this.adress = adress;

    this.getEnterprise = function (){
        return `Code: ${this.code} \nEnterprise name: ${this.enterpriseName} \nNumber of employees: ${this.numberOfEmployees} \nIndustry: ${this.industry} \nAderss: ${this.adress}`;
    }
}

let enterprise1 = new Enterprise(13, "Unet", 5, "internet", "Перечин, Центральна 22");
let enterprise2 = new Enterprise(14, "Teviant", 18, "internet", "Ужгород");

alert(enterprise1.getEnterprise());