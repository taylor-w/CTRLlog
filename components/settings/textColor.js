const slider = document.getElementById("text-color");

export default () => {
  slider.addEventListener("input", () => {
    document.documentElement.style.setProperty("--text-color", slider.value);
  });
};
