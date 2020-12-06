const rSlider = document.getElementById("j-bg-r");
const gSlider = document.getElementById("j-bg-g");
const bSlider = document.getElementById("j-bg-b");

export default () => {
  rSlider.addEventListener("input", () => {
    document.documentElement.style.setProperty("--journal-r", rSlider.value);
    console.log(rSlider.value);
  });
  gSlider.addEventListener("input", () => {
    document.documentElement.style.setProperty("--journal-g", gSlider.value);
    console.log(gSlider.value);
  });
  bSlider.addEventListener("input", () => {
    document.documentElement.style.setProperty("--journal-b", bSlider.value);
    console.log(bSlider.value);
  });
};
