const input = document.getElementById("img-text");
const btn = document.getElementById("img-btn");
let counter = 0;

export default () => {
  btn.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--splash-img",
      `url(https://source.unsplash.com/1920x1080/?${input.value}${counter})`
    );
    counter += 1;
  });
};
