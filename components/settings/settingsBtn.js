const btn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");

export default () => {
  btn.addEventListener("click", () => {
    settings.classList.replace("is-collapsed", "is-expanded") ||
      settings.classList.replace("is-expanded", "is-collapsed");
  });
};
