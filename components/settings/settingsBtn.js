const btn = document.getElementById("settings-btn");
const settingsWord = document.querySelector("h4");
const settingsMenu = document.getElementById("settings");

export default () => {
  btn.addEventListener("click", () => {
    settingsMenu.classList.replace("is-collapsed", "is-expanded") ||
      settingsMenu.classList.replace("is-expanded", "is-collapsed");
  });
  settingsWord.addEventListener("click", () => {
    settingsMenu.classList.replace("is-collapsed", "is-expanded") ||
      settingsMenu.classList.replace("is-expanded", "is-collapsed");
  });
};
