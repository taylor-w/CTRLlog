const input = document.getElementById("img-text");
const btn = document.getElementById("img-btn");

export default () => {
  btn.addEventListener("click", () => {
    console.log(input.value);
  });
};
