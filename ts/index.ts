'use strict'
const slider : HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
const range  : HTMLInputElement = <HTMLInputElement>document.getElementById("sRange");
const value  : HTMLInputElement = <HTMLInputElement>document.getElementById("sValue");
value.innerHTML = 1;
range.value = 1;
const msg = (document.querySelector("#messageText") as HTMLElement);
const msgDiv = (document.querySelector("#message") as HTMLElement);
const msgButton = (document.querySelector("#messageBtn") as HTMLElement);
const accFields: HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName("accNum");
const persFields: HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName("input_text");
const zipField: HTMLInputElement = document.getElementsByClassName("input_num")[0];
const btns: HTMLCollectionOf<Element> = document.getElementsByClassName("button");

let btnsIDs = []; // js does not allocate memory if not initialized
setDateCalendar();
range.addEventListener("change", function () {
    //console.log(range.value);
    value.innerHTML = range.value;
});
for(let element of Array.from(btns)){
    btnsIDs[(Array.from(btns)).indexOf(element)] = element.id;
}
dataValidation(zipField,"number");
(Array.from(persFields)).forEach(element => {
    dataValidation(element,"string");
});
(Array.from(accFields)).forEach(element => {
    dataValidation(element,"number");
});

(Array.from(btns)).forEach(btn => {
    btn.addEventListener("click", function () : void{
        showMsg(getMsg((Array.from(btns)).indexOf(btn)));
        if((Array.from(btns)).indexOf(btn) === 0){
            document.querySelectorAll("input").forEach((element) => {
                if(element.value === "ES"){
                    return;
                }else{
                    element.value = "";
                    value.innerHTML = 1;
                    range.value = 1;
                    setDateCalendar();
                }
            });
        }
    })

});

function setDateCalendar() : void{
    let today: Date = new Date();
    let day : string, month : string;
    let year : string = String(today.getFullYear());
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
    //console.log(year + "-" + month + "-" + day);
    (<HTMLInputElement>document.getElementById("selectedDate")).value = year + "-" + month + "-" + day;
}
function getMsg(index : number) : string{
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
            return "La fecha seleccionada en el elemento de fecha es un " + getDay(new Date((<HTMLInputElement>document.getElementById("selectedDate")).value));  
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

function dataValidation(element : HTMLInputElement, type : string ) : void{
    element.addEventListener('input', function() : void{
        let chars = [...element.value];
        if(type === "string"){
            chars.forEach(character => {
                if(!(character >= "a" && character <= "z" 
                || character >= "A" && character <= "Z")){
                    element.value = "";
                    showMsg("No se permite introducir datos numéricos");
                }
            })
        }else{
            chars.forEach(character => {
                if(!(typeof parseInt(character) === 'number' && isFinite(parseInt(character)))){
                    element.value = "";
                    showMsg("Solo se permite introducir datos numéricos");
                }
            });
        }
    })
}

function showMsg (msgText : string) : void {
    msg.innerHTML = msgText;
    msgDiv.classList.add("visible");
    msgButton.addEventListener("click",() => {
        msgDiv.classList.remove("visible");
    })
}