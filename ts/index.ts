const slider = <HTMLInputElement>document.getElementById("slider");
const range = <HTMLInputElement>document.getElementById("sRange");
const value = <HTMLInputElement>document.getElementById("sValue");
value.innerHTML = range.value;

const msg = (document.querySelector("#messageText") as HTMLElement);
const msgDiv = (document.querySelector("#message") as HTMLElement);
const msgButton = (document.querySelector("#messageBtn") as HTMLElement);

const btns: HTMLCollectionOf<Element> = document.getElementsByClassName("button");
//let btnsArray = Array.from(btns);
let btnsIDs = []; // js does not allocate memory if not initialized
// let i;
// if (!btnsIDs[i]) btnsIDs[i] = [];
range.addEventListener("change", function () {
    console.log(range.value);
    value.innerHTML = range.value;
});
for(let element of Array.from(btns)){
    btnsIDs[(Array.from(btns)).indexOf(element)] = element.id;
}

(Array.from(btns)).forEach(btn => {
    btn.addEventListener("click", function () : void{
        msg.innerHTML = getMsg((Array.from(btns)).indexOf(btn));
        msgDiv.classList.add("visible");
        msgButton.addEventListener("click",() => {
            msgDiv.classList.remove("visible");
        })
        if((Array.from(btns)).indexOf(btn) === 0){
            document.querySelectorAll("input").forEach((element) => {
                if(element.value === "ES"){
                    return;
                }else{
                    element.value = "";
                }
            });
        }
    })

});
// deleteBtn.addEventListener("click",function() {
//     document.querySelectorAll("input").forEach((element) => {
//         if(element.value === "ES"){
//             return;
//         }else{
//             element.value = "";
//         }
//     });
// })
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
    (<HTMLInputElement>document.getElementById("#selectedDate")).value = year + "-" + month + "-" + day;
}
function getMsg(index){
    switch (index){
        case 0:
            return "Los datos se han borrado correctamente";
        case 1:    
            return "Has valorado con " + value.innerHTML + " puntos";
        case 2:
            return "Le informamos que su cuenta bancaria es: \n " +
            (<HTMLInputElement>document.getElementById("pais")).value +
            (<HTMLInputElement>document.getElementById("iban")).value + "-" +
            (<HTMLInputElement>document.getElementById("entidad")).value + "-" +
            (<HTMLInputElement>document.getElementById("suc")).value + "-" +
            (<HTMLInputElement>document.getElementById("DC")).value + "-" +
            (<HTMLInputElement>document.getElementById("cuenta")).value;
        case 3:
            return "La fecha seleccionada en el elemento de fecha es un " + getDay(new Date((<HTMLInputElement>document.getElementById("#selectedDate")).value));  
        default: return "Undefined";     
    }
}

function getDay(date : Date) : string{
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