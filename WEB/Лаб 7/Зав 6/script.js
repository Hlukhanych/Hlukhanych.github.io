let data = ["glara", "poncho", "chipsa", "money", "only"];
let form = document.getElementById("form");
let elem = form.getElementsByTagName("input");

function onClick(){
    for(let i = 0; i < data.length; i++){
        if(elem[0].value == data[i]){
            document.getElementById("result").innerHTML = "Логін зайнятий";
            break;
        }
    }
    if(document.getElementById("result").innerHTML == "Логін зайнятий"){
        
    }
    else{
        if(elem[0].value == elem[1].value){
            document.getElementById("result").innerHTML = "Логін та пароль співпадають";
        }
        else{
            document.getElementById("result").innerHTML = "Вірно";
        }
    }
}