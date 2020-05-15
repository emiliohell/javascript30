const root = document.documentElement;

const sliderBorder = document.getElementById("borderVar");

sliderBorder.oninput = function () {
  root.style.setProperty("--border-size", this.value + "px");
};

const sliderBlur = document.getElementById("blurVar");

sliderBlur.oninput = function () {
  root.style.setProperty("--blur-filter", this.value + "px");
};

const colorChoice = document.getElementById("favcolor");

colorChoice.oninput = function () {
  root.style.setProperty("--main-color", this.value);
};
