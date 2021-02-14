'use strict';
var slider = document.getElementById("slider");
var range = document.getElementById("sRange");
var value = document.getElementById("sValue");
value.innerHTML = 1;
range.value = 1;
var msg = document.querySelector("#messageText");
var msgDiv = document.querySelector("#message");
var msgButton = document.querySelector("#messageBtn");
var btns = document.getElementsByClassName("button");
//let btnsArray = Array.from(btns);
var btnsIDs = []; // js does not allocate memory if not initialized
// let i;
// if (!btnsIDs[i]) btnsIDs[i] = [];
setDateCalendar();
range.addEventListener("change", function () {
    //console.log(range.value);
    value.innerHTML = range.value;
});
for (var _i = 0, _a = Array.from(btns); _i < _a.length; _i++) {
    var element = _a[_i];
    btnsIDs[(Array.from(btns)).indexOf(element)] = element.id;
}
(Array.from(btns)).forEach(function (btn) {
    btn.addEventListener("click", function () {
        msg.innerHTML = getMsg((Array.from(btns)).indexOf(btn));
        msgDiv.classList.add("visible");
        msgButton.addEventListener("click", function () {
            msgDiv.classList.remove("visible");
        });
        if ((Array.from(btns)).indexOf(btn) === 0) {
            document.querySelectorAll("input").forEach(function (element) {
                if (element.value === "ES") {
                    return;
                }
                else {
                    element.value = "";
                    setDateCalendar();
                }
            });
        }
    });
});
function setDateCalendar() {
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
    document.getElementById("selectedDate").value = year + "-" + month + "-" + day;
}
function getMsg(index) {
    switch (index) {
        case 0:
            return "Los datos se han borrado correctamente";
        case 1:
            return "Has valorado con " + value.innerHTML + " puntos";
        case 2:
            return "Le informamos que su cuenta bancaria es: \n " +
                document.getElementById("pais").value +
                document.getElementById("iban").value + "-" +
                document.getElementById("entidad").value + "-" +
                document.getElementById("suc").value + "-" +
                document.getElementById("DC").value + "-" +
                document.getElementById("cuenta").value;
        case 3:
            return "La fecha seleccionada en el elemento de fecha es un " + getDay(new Date(document.getElementById("selectedDate").value));
        default: return "Undefined";
    }
}
function getDay(date) {
    switch (date.getDay()) {
        case 0: return "Domingo";
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
        default: return "-1";
    }
}
