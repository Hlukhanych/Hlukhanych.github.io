let data = ["glara", "1234"];
let form = document.getElementById("form");
let elem = form.getElementsByTagName("input");

function onClick(){
    if(elem[0].value == data[0] && elem[1].value == data[1]){
        document.getElementById("result").innerHTML = "Вірно";
    }
    else{
        document.getElementById("result").innerHTML = "Невірно, спробуйте знову";
    }
}