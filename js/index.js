'use strict';

const slider = document.getElementById("slider");
const range = document.getElementById("sRange");
const value = document.getElementById("sValue");
value.innerHTML = 1;
range.value = 1;
const msg = document.querySelector("#messageText");
const msgDiv = document.querySelector("#message");
const msgButton = document.querySelector("#messageBtn");
console.log("Hello");
const accFields = document.getElementsByClassName("accNum");
const persFields = document.getElementsByClassName("input_text");
const zipField = document.getElementsByClassName("input_num")[0];
const btns = document.getElementsByClassName("button");
let btnsIDs = []; // js does not allocate memory if not initialized

setDateCalendar();
range.addEventListener("change", function () {
  //console.log(range.value);
  value.innerHTML = range.value;
});

for (let element of Array.from(btns)) {
  btnsIDs[Array.from(btns).indexOf(element)] = element.id;
}

dataValidation(zipField, "number");
Array.from(persFields).forEach(element => {
  dataValidation(element, "string");
});
Array.from(accFields).forEach(element => {
  dataValidation(element, "number");
});
Array.from(btns).forEach(btn => {
  btn.addEventListener("click", function () {
    showMsg(getMsg(Array.from(btns).indexOf(btn)));

    if (Array.from(btns).indexOf(btn) === 0) {
      document.querySelectorAll("input").forEach(element => {
        if (element.value === "ES") {
          return;
        } else {
          element.value = "";
          value.innerHTML = 1;
          range.value = 1;
          setDateCalendar();
        }
      });
    }
  });
});

function setDateCalendar() {
  let today = new Date();
  let day, month;
  let year = String(today.getFullYear());

  if (today.getDate() < 10) {
    day = "0" + String(today.getDate());
  } else {
    day = String(today.getDate());
  }

  if (today.getMonth() == 0) {
    month = "01";
  } else {
    if (today.getMonth() + 1 < 10) {
      month = "0" + String(today.getMonth() + 1);
    } else {
      month = String(today.getMonth() + 1);
    }
  } //console.log(year + "-" + month + "-" + day);


  document.getElementById("selectedDate").value = year + "-" + month + "-" + day;
}

function getMsg(index) {
  switch (index) {
    case 0:
      return "Los datos se han borrado correctamente";

    case 1:
      return "Has valorado con " + value.innerHTML + " puntos";

    case 2:
      return "Le informamos que su cuenta bancaria es: \n " + document.getElementById("pais").value + document.getElementById("iban").value + "-" + document.getElementById("entidad").value + "-" + document.getElementById("suc").value + "-" + document.getElementById("DC").value + "-" + document.getElementById("cuenta").value;

    case 3:
      return "La fecha seleccionada en el elemento de fecha es un " + getDay(new Date(document.getElementById("selectedDate").value));

    default:
      return "Undefined";
  }
}

function getDay(date) {
  switch (date.getDay()) {
    case 0:
      return "Domingo";

    case 1:
      return "Lunes";

    case 2:
      return "Martes";

    case 3:
      return "Miercoles";

    case 4:
      return "Jueves";

    case 5:
      return "Viernes";

    case 6:
      return "Sabado";

    default:
      return "-1";
  }
}

function dataValidation(element, type) {
  element.addEventListener('input', function () {
    let chars = [...element.value];

    if (type === "string") {
      chars.forEach(character => {
        if (!(character >= "a" && character <= "z" || character >= "A" && character <= "Z")) {
          element.value = "";
          showMsg("No se permite introducir datos numéricos");
        }
      });
    } else {
      chars.forEach(character => {
        if (!(typeof parseInt(character) === 'number' && isFinite(parseInt(character)))) {
          element.value = "";
          showMsg("Solo se permite introducir datos numéricos");
        }
      });
    }
  });
}

function showMsg(msgText) {
  msg.innerHTML = msgText;
  msgDiv.classList.add("visible");
  msgButton.addEventListener("click", () => {
    msgDiv.classList.remove("visible");
  });
}