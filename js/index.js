var slider = document.querySelector("#slider");
var range = slider.querySelector("#sRange");
var value = slider.querySelector("#sValue");
value.innerHTML = range.value;
range.addEventListener("change", function () {
    console.log(range.value);
    value.innerHTML = range.value;
});
