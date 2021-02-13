var slider = document.querySelector("#slider");
var range = slider.querySelector("#sRange");
var value = slider.querySelector("#sValue");
value.innerHTML = range.value;
var today = new Date();
var deleteBtn = document.querySelector("#clearDataBtn");
var valBtn = document.querySelector("#valBtn");
var accBtn = document.querySelector("#accBtn");
var dateBtn = document.querySelector("#dateBtn");
range.addEventListener("change", function () {
    console.log(range.value);
    value.innerHTML = range.value;
});
valBtn.addEventListener("click", function () {
    alert("Has valorado con " + value.innerHTML + " puntos");
});
accBtn.addEventListener("click", function () {
    alert("Le informamos que su cuenta bancaria es: \n " +
        document.querySelector("#pais").value +
        document.querySelector("#iban").value + "-" +
        document.querySelector("#entidad").value + "-" +
        document.querySelector("#suc").value + "-" +
        document.querySelector("#DC").value + "-" +
        document.querySelector("#cuenta").value);
});

dateBtn.addEventListener("click", function () {
    alert("La fecha seleccionada en el elemento de fecha es un " + setDate());
});
deleteBtn.addEventListener("click",function() {
    document.querySelectorAll("input").forEach((element) => {
        if(element.value === "ES"){
            return;
        }else{
            element.value = "";
        }
    });
})
function setDate() {
    var today = new Date();
    var day, month;
    var year = String(today.getFullYear());
    if (today.getDate() < 10) {
        day = "0" + String(today.getDate());
    }
    else {
        day = String(today.getDate());
    }
    if (today.getMonth() == 0) {
        month = "01";
    }
    else {
        if (today.getMonth() + 1 < 10) {
            month = "0" + String(today.getMonth() + 1);
        }
        else {
            month = String(today.getMonth() + 1);
        }
    }
    console.log(year + "-" + month + "-" + day);
    document.querySelector("#selectedDate").value = year + "-" + month + "-" + day;
    switch (today.getDay()) {
        case 0: return "Domingo";
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
        default: return "-1";
    }
    return "-1";
}
