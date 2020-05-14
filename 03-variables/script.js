var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var image1 = document.getElementsByClassName("image");

console.log(image1);
console.log(slider.value);
console.log(output);

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
