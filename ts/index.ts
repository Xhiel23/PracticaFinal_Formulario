const slider = document.querySelector("#slider");
const range = slider.querySelector("#sRange");
const value = slider.querySelector("#sValue");
value.innerHTML = range.value;

range.addEventListener("change",() =>{
    console.log(range.value);
    value.innerHTML = range.value;
});